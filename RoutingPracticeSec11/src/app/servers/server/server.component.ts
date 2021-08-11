import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string} = {id: -1, name: "init", status: "init"};

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    const server = this.serversService.getServer(1);
    if(server)
      this.server = server;
  }

}
