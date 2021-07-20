import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',      //use component as selector id
  // selector: '[app-servers]', //use component as attribute
  // selector: '.app-servers',  //use component as dot class similarly to css
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
