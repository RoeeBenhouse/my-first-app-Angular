import {Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

@Injectable()
export class CounterService {
  activateCounter = 0;
  deactivateCounter = 0;

  constructor(private loggingService: LoggingService) {
  }

  incActivateCounter() {
    this.activateCounter++;
    this.loggingService.logCounter(this.activateCounter, this.deactivateCounter);
  }

  incDeActivateCounter() {
    this.deactivateCounter++;
    this.loggingService.logCounter(this.activateCounter, this.deactivateCounter);
  }
}
