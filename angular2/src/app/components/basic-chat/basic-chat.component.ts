import { AfterContentInit, Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/env/environment';

@Component({
  selector: 'app-basic-chat',
  templateUrl: './basic-chat.component.html',
  styleUrls: ['./basic-chat.component.css']
})
export class BasicChatComponent implements OnInit, AfterContentInit {

  private _client: HubConnection;
  listaMensagens: string[] = [];
  mensagemEnviar: string;

  constructor() {
    this.mensagemEnviar = "";
    this._client = new HubConnectionBuilder()
      .withUrl(environment.apiURL + "hubs/basicChatHub")
      .build();

    this._client
      .start()
      .then(() => console.log('Connection Started'))
      .then(() => {
        this._client.invoke("SendMessageToAll", "Lucas", "Lucas Conectou").then((value) => console.log(value));
      })
      .catch(err => console.log('Erro ao iniciar conexão: ' + err))
  }

  ngOnInit() {

    this._client.on("messageReceived", (user, message) => {
      this.listaMensagens.push(message);
      console.log(user);
      console.log(message);
    });
    // console.log('onInit');
  }

  ngAfterContentInit() {
    // console.log('after content');
    // let interval = setInterval(() => {
    // }, 1000);

    // if (this._client.state === HubConnectionState.Connected) {
    //   this._client.invoke("NewWindowLoaded", "Lucas").then((value) => console.log(value));
    // }
  }

  sendMessage() {
    debugger;
    this._client.invoke("SendMessageToAll", "Lucas", `${this.mensagemEnviar}`).then((value) => console.log(value));
  }
}
