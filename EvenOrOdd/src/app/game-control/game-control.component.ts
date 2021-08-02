import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: 'game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  ticks = 0;
  // @ts-ignore
  interval;
  @Output('intervalEvent') intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.ticks + 1);
      this.ticks++;
    }, 1000);
  }

  onGamePause() {
    clearInterval(this.interval);
    console.log("Game paused!");
    console.log("The game took " + this.ticks + " ticks");
  }
}
