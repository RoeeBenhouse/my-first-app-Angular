import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import {AccountsService} from "./shared/accounts.service";
import {LoggingService} from "./shared/logging.service";
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InActiveUsersComponent } from './in-active-users/in-active-users.component';
import {UsersService} from "./shared/users.service";
import {CounterService} from "./shared/counter.service";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InActiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService, UsersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
