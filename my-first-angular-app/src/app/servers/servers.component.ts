import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',      //use component as selector id
  // selector: '[app-servers]', //use component as attribute
  // selector: '.app-servers',  //use component as dot class similarly to css
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'No server was created ...';
  serverCreated = false;
  serverName = 'Test';
  servers = ['FirstServer']

  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreatServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = 'Server ' + this.serverName + ' was created successfully!';
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
