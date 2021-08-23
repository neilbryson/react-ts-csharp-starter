using System;

namespace ReactTSCSharpStarter.Models
{
    public class Sample : ISample
    {
        public DateTime CurrentTime { get; set; }
        public string Message { get; set; }
    }

    public interface ISample
    {
        DateTime CurrentTime { get; set; }
        string Message { get; set; }
    }
}
