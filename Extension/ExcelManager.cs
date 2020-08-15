using Abp;
using Abp.Dependency;
using AutoMapper;
using FIH.TalentMatrix.Exceptions;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;

namespace FIH.TalentMatrix.Extension
{
    public class ExcelManager : AbpServiceBase, ITransientDependency
    {
        public ExcelManager()
        {
            LocalizationSourceName = TalentMatrixConsts.LocalizationSourceName;
        }
        public static void Test()
        {
            Debug.Write(System.Environment.CurrentDirectory);
            Debug.Write(System.AppDomain.CurrentDomain.BaseDirectory);
            Debug.Write(System.AppDomain.CurrentDomain.SetupInformation.ApplicationBase);
            string importExcelPath = "E:\\import.xlsx";
            string exportExcelPath = "E:\\export.xlsx";
            IWorkbook workbook = WorkbookFactory.Create(importExcelPath);
            ISheet sheet = workbook.GetSheetAt(0);//获取第一个工作薄

            Debug.Write(sheet.PhysicalNumberOfRows);
            for (int i = 0; i < sheet.PhysicalNumberOfRows; i++)
            {
                IRow row = (IRow)sheet.GetRow(i);//获取第一行

                //设置第一行第一列值,更多方法请参考源官方Demo
                row.CreateCell(i).SetCellValue("test");//设置第一行第一列值
            }


            //导出excel
            FileStream fs = new FileStream(exportExcelPath, FileMode.Create, FileAccess.ReadWrite);
            workbook.Write(fs);
            fs.Close();
        }

        public ReadExcelResult<T> ReadExcel<T>(Stream stream, ReadExcelOptions readExcelOptions = null) where T : new()
        {
            IWorkbook workbook = WorkbookFactory.Create(stream, true);
            return HandleExcelStream<T>(workbook, readExcelOptions);
        }



        public ReadExcelResult<T> ReadExcel<T>(string filePath, ReadExcelOptions readExcelOptions = null) where T : new()
        {
            IWorkbook workbook = WorkbookFactory.Create(filePath);
            return HandleExcelStream<T>(workbook, readExcelOptions);
        }

        /// <summary>
        /// 读取 Excel 表格
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="workbook"></param>
        /// <param name="readExcelOptions"></param>
        /// <returns></returns>
        private ReadExcelResult<T> HandleExcelStream<T>(IWorkbook workbook, ReadExcelOptions readExcelOptions = null) where T : new()
        {
            ReadExcelResult<T> result = new ReadExcelResult<T>();
            result.SuccessResult = new List<T>();
            result.FailedResult = new List<T>();
            result.FailedMetaData = new List<FailedMetaData>();
     
            if (workbook == null)
            {
                throw new ExcelException(L("WorkbookNullPointException"));
            }
            ISheet sheet = workbook.GetSheetAt(readExcelOptions != null ? readExcelOptions.SheetIndex : 0);
            if (sheet == null)
            {
                throw new ExcelException(L("SheetNullPointException"));
            }
            IRow codes_row = sheet.GetRow(readExcelOptions != null ? readExcelOptions.ColumnIndex : 0);
            result.TotalCount = sheet.PhysicalNumberOfRows - 1;
            for (int i = 1; i < sheet.PhysicalNumberOfRows; i++)
            {

                Dictionary<string, object> AttributeDict = new Dictionary<string, object>();
                IRow row = sheet.GetRow(i);

                if(row == null)
                {
                    result.TotalCount--;
                    continue;
                }
                int cellCount = row.PhysicalNumberOfCells;
                for (int j = 0; j < cellCount; j++)
                {
                    AttributeDict.Add(codes_row.GetCell(j).StringCellValue, row.GetCell(j));
                }

                DicToObjectResult<T> dicToObjectResult = DicToObject<T>(AttributeDict);
                if (dicToObjectResult.Errors.Count > 0)
                {
                    FailedMetaData failedMetaData = new FailedMetaData()
                    {
                        RowIndex = i,
                        Message = string.Format(L("RowDataError"), i)
                    };
                    result.FailedResult.Add(dicToObjectResult.Result);
                    failedMetaData.FailedErrorMessage = dicToObjectResult.Errors;
                    result.FailedMetaData.Add(failedMetaData);
                }
                else
                {
                    result.SuccessResult.Add(dicToObjectResult.Result);
                }
                if (result.FailedMetaData.Count >= 5)
                {
                    break;
                }
            }
           
            result.FailedCount = result.FailedResult.Count;
            result.SuccessCount = result.SuccessResult.Count;
            return result;
        }

        /// <summary>
        /// 字典类型转化为对象
        /// </summary>
        /// <param name="dic"></param>
        /// <returns></returns>
        private DicToObjectResult<T> DicToObject<T>(Dictionary<string, object> dic) where T : new()
        {
            DicToObjectResult<T> result = new DicToObjectResult<T>
            {
                Errors = new List<string>()
            };
            var dto = new T();
            foreach (var excelItem in dic)
            {
                var filed = excelItem.Key;
                try
                {
                    PropertyInfo propertyInfo = dto.GetType().GetProperty(filed);
                    if (dto.GetType().GetProperty(filed) == null)
                    {
                        throw new ExcelException(filed + " is invalid");
                    }
                    Type propertyType = propertyInfo.PropertyType;
                    object value;

                    if(excelItem.Value == null)
                    {
                        value = null;
                    }
                    else
                    {
                        if (propertyType.Name.Equals("Double"))
                        {
                            value = ((ICell)excelItem.Value).NumericCellValue;
                        }
                        else if (propertyType.Name.Equals("DateTime"))
                        {
                            value = ((ICell)excelItem.Value).DateCellValue;
                        }else
                        {
                            value = excelItem.Value.ToString();
                        }
                    }
                   
                    var attributes = propertyInfo.GetCustomAttributes(true);
                    if (attributes.Count() > 0)
                    {
                        for (int i = 0; i < attributes.Count(); i++)
                        {
                            if (attributes[i].GetType().Name.Equals("RequiredAttribute"))
                            {
                                if(value == null)
                                {
                                    RequiredAttribute ra = (RequiredAttribute)attributes[i];
                                    result.Errors.Add(string.Format(@"{0}:{1};", filed, L(ra.ErrorMessage)));
                                }
                            }else if (attributes[i].GetType().Name.Equals("MaxLengthAttribute"))
                            {
                                MaxLengthAttribute mla = (MaxLengthAttribute)attributes[i];
                                if(mla.Length < value.ToString().Length)
                                {
                                    result.Errors.Add(string.Format(@"{0}:{1};", filed, mla.FormatErrorMessage(filed)));
                                }
                            }
                        }
                    }
                    dto.GetType().GetProperty(filed).SetValue(dto, value);
                }
                catch (Exception e)
                {
                    Debug.Write(e.Message);
                }
            }
            result.Result = dto;
            return result;
        }

        /// <summary>
        /// Assign parameters to specified objects
        /// </summary>
        /// <typeparam name="T">object type</typeparam>
        /// <param name="dic">Fields/values</param>
        /// <returns></returns>
        public static T Assign<T>(Dictionary<string, string> dic) where T : new()
        {
            Type myType = typeof(T);
            T entity = new T();
            var fields = myType.GetProperties();
            string val = string.Empty;
            object obj = null;

            foreach (var field in fields)
            {
                if (!dic.ContainsKey(field.Name))
                    continue;
                val = dic[field.Name];

                object defaultVal;
                if (field.PropertyType.Name.Equals("String"))
                    defaultVal = "";
                else if (field.PropertyType.Name.Equals("Boolean"))
                {
                    defaultVal = false;
                    val = (val.Equals("1") || val.Equals("on")).ToString();
                }
                else if (field.PropertyType.Name.Equals("Decimal"))
                    defaultVal = 0M;
                else
                    defaultVal = 0;

                if (!field.PropertyType.IsGenericType)
                    obj = string.IsNullOrEmpty(val) ? defaultVal : Convert.ChangeType(val, field.PropertyType);
                else
                {
                    Type genericTypeDefinition = field.PropertyType.GetGenericTypeDefinition();
                    if (genericTypeDefinition == typeof(Nullable<>))
                        obj = string.IsNullOrEmpty(val) ? defaultVal : Convert.ChangeType(val, Nullable.GetUnderlyingType(field.PropertyType));
                }

                field.SetValue(entity, obj, null);
            }

            return entity;
        }
    }
    class DicToObjectResult<T>{
        public List<string> Errors { get; set; }
        public T Result { get; set; }
    }
}

