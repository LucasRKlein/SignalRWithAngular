
namespace SignalRWithAngular.Hubs
{
    public interface IUsersHub
    {
        Task<string> NewWindowLoaded(string name);
        Task OnConnectedAsync();
        Task OnDisconnectedAsync(Exception? exception);
    }
}