export class LoggingService {
  logStatusChanged(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

  logCounter(counterActivate: number, counterDeactivate: number) {
    console.log("Activate counter: " + counterActivate
            + "\nDeactivate counter: " + counterDeactivate);
  }
}
