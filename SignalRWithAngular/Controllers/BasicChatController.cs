using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalRWithAngular.Hubs;

namespace SignalRWithAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BasicChatController : ControllerBase
    {
        private readonly ILogger<BasicChatController> _logger;
        private readonly IHubContext<UsersHub> _usersHub;

        public BasicChatController(ILogger<BasicChatController> logger, IHubContext<UsersHub> usersHub)
        {
            _logger = logger;
            _usersHub = usersHub;
        }
    }
}
