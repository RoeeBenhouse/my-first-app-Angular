import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverID: number;
  serverStatus: string;

  constructor() {
    this.serverID = Math.round(Math.random() * 100);
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'darkseagreen' : 'mistyrose';
  }
}
