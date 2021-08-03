import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAction(element: { ingredient: Ingredient; action: string }) {
    let ingredientEl = element.ingredient;
    switch (element.action) {
      case "add": {
        let exist = false;
        this.ingredients.map((currIngredient, index) => {
            if(currIngredient.name === ingredientEl.name) {
              this.ingredients[index].amount += ingredientEl.amount;
              exist = true;
            }
          })
        if(!exist)
          this.ingredients.push(ingredientEl);
        break;
      }
      case "delete": {
        this.ingredients.map((currIngredient, index) => {
          if(currIngredient.name === ingredientEl.name) {
            if(ingredientEl.amount === 0) {
              this.ingredients.splice(index);
            }
            else if (ingredientEl.amount < 0) {
              console.log("error in shopping list - onAction!");
            }
            else {
              this.ingredients[index].amount -= ingredientEl.amount;
            }
          }
        })
      break;
      }
      case "clear": {
        this.ingredients = [];
        break;
      }
    }
  }
}
