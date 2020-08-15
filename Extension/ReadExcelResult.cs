using System;
using System.Collections.Generic;
using System.Text;

namespace FIH.TalentMatrix.Extension
{
    public class ReadExcelResult<T>
    {
        public long TotalCount { get; set; }
        public long SuccessCount { get; set; }
        public long FailedCount { get; set; }
        public List<T> FailedResult { get; set; }
        public List<T> SuccessResult { get; set; }
        public List<FailedMetaData> FailedMetaData { get; set; }
    }

    public class FailedMetaData
    {
        public long RowIndex { get; set; }
        public string Message { get; set; }
        public List<string> FailedErrorMessage { get; set; }
    }
}
