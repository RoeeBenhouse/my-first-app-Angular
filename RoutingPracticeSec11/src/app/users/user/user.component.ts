import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})

export class UserComponent implements OnInit {
  user: {id: number, name: string} = {id:-1, name:""};

  constructor() { }

  ngOnInit() {
  }

}
