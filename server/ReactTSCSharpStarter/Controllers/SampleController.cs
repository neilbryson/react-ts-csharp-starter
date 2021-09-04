using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReactTSCSharpStarter.Models;

namespace ReactTSCSharpStarter.Controllers
{
    [ApiVersion("1")]
    [Consumes("application/json")]
    [Produces("application/json")]
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class SampleController : ControllerBase
    {
        private readonly ILogger<SampleController> _logger;

        public SampleController(ILogger<SampleController> logger) => _logger = logger;

        [HttpGet]
        public ActionResult<Sample> Get()
        {
            return new Sample
            {
                CurrentTime = DateTime.UtcNow,
                Message = "Hello world!",
            };
        }
    }
}
