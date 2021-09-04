using System;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;
using ReactTSCSharpStarter.Controllers;

namespace ReactTSCSharpStarter.Tests
{
    public class SampleControllerTests
    {
        [Fact]
        public void Get_ReturnsASampleResult()
        {
            var mockLogger = new Mock<ILogger<SampleController>>();
            var controller = new SampleController(mockLogger.Object);
            var actionResult = controller.Get();
            Assert.Equal("Hello world!", actionResult.Value.Message);
            Assert.IsType<DateTime>(actionResult.Value.CurrentTime);
        }
    }
}
