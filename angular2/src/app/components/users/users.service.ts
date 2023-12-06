import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private hubConnection: HubConnection;
  // totalViews: number = 0;
  // totalUsers: number = 0;

  // constructor() {
  //   this.hubConnection = new HubConnectionBuilder()
  //   .withUrl(environment.apiURL + "hubs/usersHub")
  //   .build();  
  // }

  // public startConnection= () => {
  //   // this.hubConnection = new HubConnectionBuilder()
  //   //   .withUrl(environment.apiURL + "hubs/usersHub")
  //   //   .build();

  //   this.hubConnection
  //     .start()
  //     .then(() => console.log('Connection Started'))
  //     .catch(err => console.log('Erro ao iniciar conexão: ' + err));
  // }

  // updateTotalViews(): number {
  //   this.hubConnection.on("updateTotalViews", (value) => {
  //     this.totalViews = value;
  //     console.log(value);
  //     return this.totalViews;
  //   });
  //   return this.totalViews;
  // }

  // updateTotalUsers(): number {
  //   this.hubConnection.on("updateTotalUsers", (value) => {
  //     this.totalUsers = value;
  //     console.log(value);
  //     return this.totalUsers;
  //   });
  //   return this.totalUsers;
  // }
}
