using Microsoft.AspNetCore.SignalR;
using SignalRWithAngular.Data;

namespace SignalRWithAngular.Hubs
{
    public class ChatHub : Hub
    {
        private readonly ApplicationDbContext _db;
        public ChatHub(ApplicationDbContext db)
        {
            _db = db;
        }
    }
}
