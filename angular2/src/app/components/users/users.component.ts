import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/env/environment';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _client: HubConnection;
  totalViews: number = 0;
  totalUsers: number = 0;

  constructor() { 
    this._client = new HubConnectionBuilder()
    .withUrl(environment.apiURL + "/hubs/usersHub")
    .build();

    this._client.on("updateTotalViews", (value) => {
      this.totalViews = value;
    });
    this._client.on("updateTotalUsers", (value) => {
      this.totalUsers = value;
    });
  }

  ngOnInit() {
  }

  //https://www.youtube.com/watch?v=YEFVpqmjx78&t=27s&ab_channel=ShawnWildermuth
  //https://www.youtube.com/watch?v=oW3n0HIOcAE&ab_channel=CodeYourself
  //https://learn.microsoft.com/pt-br/aspnet/core/tutorials/signalr-typescript-webpack?view=aspnetcore-7.0&tabs=visual-studio
}
