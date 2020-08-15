using System;
using System.Collections.Generic;
using System.Text;

namespace FIH.TalentMatrix.Extension
{
    public interface ReadExcelOptions
    {
        /// <summary>
        /// 默认第一个sheet
        /// </summary>
        public int SheetIndex { get; set; }

        /// <summary>
        /// 默认第一行为头字段
        /// </summary>
        public int ColumnIndex { get; set; }
    }
}
