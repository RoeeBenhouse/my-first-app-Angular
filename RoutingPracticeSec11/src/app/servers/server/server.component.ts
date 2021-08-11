import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `
    <p>
      server works!
    </p>
  `,
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
