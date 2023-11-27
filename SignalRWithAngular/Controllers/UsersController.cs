using Microsoft.AspNetCore.Mvc;
using SignalRWithAngular.Server.Controllers;

namespace SignalRWithAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        

        private readonly ILogger<UsersController> _logger;

        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }
    }
}
