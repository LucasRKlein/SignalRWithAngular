using Microsoft.AspNetCore.SignalR;

namespace SignalRWithAngular.Hubs
{
    public class UsersHub : Hub
    {
        public static int TotalViews { get; set; } = 0;
        public static int TotalUsers { get; set; } = 0;

        public override Task OnConnectedAsync()
        {
            TotalUsers++;
            Clients.All.SendAsync("updateTotalUsers", TotalUsers).GetAwaiter().GetResult();
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception? exception)
        {
            TotalUsers--;
            Clients.All.SendAsync("updateTotalUsers", TotalUsers).GetAwaiter().GetResult();
            return base.OnDisconnectedAsync(exception);
        }

        //public async Task NewWindowLoaded()
        //{
        //    TotalViews++;
        //    //Send Update to all CLients that total views have been updated
        //    await Clients.All.SendAsync("updateTotalViews", TotalViews);
        //}

        public async Task<string> NewWindowLoaded(string name)
        {
            TotalViews++;
            //Send Update to all CLients that total views have been updated
            await Clients.All.SendAsync("updateTotalViews", TotalViews);
            return $"total views from {name} - {TotalViews}";
        }

        //public async Task<string> NewWindowLoaded()
        //{
        //    TotalViews++;
        //    //Send Update to all CLients that total views have been updated
        //    await Clients.All.SendAsync("updateTotalViews", TotalViews);
        //    return $"total views from Lucas - {TotalViews}";
        //}
    }
}
