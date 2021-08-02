import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvenOrOdd';
  odds: number[] = [];
  evens: number[] = [];


  onIntervalFired(fireNumber: number) {
    console.log(fireNumber);

    if(fireNumber % 2 == 0) //Even
      this.evens.push(fireNumber);
    else //Odd
      this.odds.push(fireNumber);
  }
}
