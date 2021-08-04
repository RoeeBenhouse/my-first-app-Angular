import {Injectable, EventEmitter} from "@angular/core";
import {LoggingService} from "./logging.service";

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    const newAccount = {name: name, status: status}
    this.accounts.push(newAccount);
    this.loggingService.logStatusChanged(status);
  }
  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChanged(newStatus);
  }

}
