import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() recipeClicked = new EventEmitter<string>()
  @Output() shoppingListClicked = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClicked() {
    this.recipeClicked.emit("recipes");
  }

  onShoppingListClicked() {
    this.shoppingListClicked.emit("shoppingList");
  }
}
