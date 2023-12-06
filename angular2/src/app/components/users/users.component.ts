import { AfterContentInit, Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';
import { interval } from 'rxjs';
import { environment } from 'src/env/environment';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterContentInit {

  private _client: HubConnection;
  totalViews: number = 0;
  totalUsers: number = 0;

  constructor() {
    this._client = new HubConnectionBuilder()
      .withUrl(environment.apiURL + "hubs/usersHub")
      .build();

    this._client
      .start()
      .then(() => console.log('Connection Started'))
      .then(() => {
        this._client.invoke("NewWindowLoaded", "Lucas").then((value) => console.log(value));
      })
      .catch(err => console.log('Erro ao iniciar conexão: ' + err))
  }

  ngOnInit() {
    this._client.on("updateTotalViews", (value) => {
      this.totalViews = value;
      console.log(value);
    });

    this._client.on("updateTotalUsers", (value) => {
      this.totalUsers = value;
      console.log(value);
    });
    console.log('onInit');
  }

  ngAfterContentInit() {
    // console.log('after content');
    // let interval = setInterval(() => {
    // }, 1000);

    // if (this._client.state === HubConnectionState.Connected) {
    //   this._client.invoke("NewWindowLoaded", "Lucas").then((value) => console.log(value));
    // }
  }

  somarViews() {
    debugger;
    this._client.invoke("NewWindowLoaded", "Lucas").then((value) => console.log(value));
  }

  //https://www.youtube.com/watch?v=YEFVpqmjx78&t=27s&ab_channel=ShawnWildermuth
  //https://www.youtube.com/watch?v=oW3n0HIOcAE&ab_channel=CodeYourself
  //https://learn.microsoft.com/pt-br/aspnet/core/tutorials/signalr-typescript-webpack?view=aspnetcore-7.0&tabs=visual-studio
  // https://www.youtube.com/watch?v=R7PTuOK0ltM&t=159s&ab_channel=CodeMaze
}
