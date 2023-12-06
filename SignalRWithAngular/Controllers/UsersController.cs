using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalRWithAngular.Hubs;
using SignalRWithAngular.Server.Controllers;

namespace SignalRWithAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly IHubContext<UsersHub> _usersHub;

        public UsersController(ILogger<UsersController> logger, IHubContext<UsersHub> usersHub)
        {
            _logger = logger;
            _usersHub = usersHub;
        }

        //[HttpGet]
        //public IActionResult NewWindowLoaded(string name)
        //{
        //    var response = _usersHub.;
        //    return response;
        //}
    }
}
