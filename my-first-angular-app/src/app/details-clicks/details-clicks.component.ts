import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-clicks',
  templateUrl: './details-clicks.component.html',
  styles: [`
    .after5 {
      color: white;
    }
  `]
})
export class DetailsClicksComponent implements OnInit {
  displayDetails;
  allClicks;
  clicksCounter;

  constructor() {
    this.displayDetails = false;
    this.allClicks = [];
    this.clicksCounter = 0;
  }

  ngOnInit(): void {
  }

  onDisplayDetails() {
    this.allClicks.push(this.getClickStamp());
    this.displayDetails = !this.displayDetails;
  }

  getClickStamp() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    var type_num = this.clicksCounter + ') type: ';
    this.clicksCounter++;

    type_num = type_num + (this.displayDetails ? 'hide' : 'display');
    type_num = type_num + ', timestamp: ';

    return type_num + dateTime;
  }
}
