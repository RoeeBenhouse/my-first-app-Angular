import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../shared/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './in-active-users.component.html',
  styleUrls: ['./in-active-users.component.css']
})


export class InActiveUsersComponent implements OnInit {
  // @Input() users!: string[];
  users: string[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

}
