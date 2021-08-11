import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  editIngredients = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onAction(element: { ingredient: Ingredient; action: string }) {
    let ingredientEl = element.ingredient;
    switch (element.action) {
      case "add": {
        this.addIngredient(ingredientEl);
        break;
      }
      case "delete": {
        this.deleteIngredient(ingredientEl);
        break;
      }
      case "clear": {
        this.ingredients = [];
        break;
      }
    }
    this.editIngredients.emit(this.ingredients.slice());
  }

  private deleteIngredient(ingredientEl: Ingredient) {
    this.ingredients.map((currIngredient, index) => {
      if (currIngredient.name === ingredientEl.name) {
        if (ingredientEl.amount === 0) {
          this.ingredients.splice(index);
        } else if (ingredientEl.amount < 0) {
          console.log("error in shopping list - onAction!");
        } else {
          this.ingredients[index].amount -= ingredientEl.amount;
        }
      }
    })
  }

  private addIngredient(ingredientEl: Ingredient) {
    let exist = false;
    this.ingredients.map((currIngredient, index) => {
      if (currIngredient.name === ingredientEl.name) {
        this.ingredients[index].amount += ingredientEl.amount;
        exist = true;
      }
    })
    if (!exist)
      this.ingredients.push(ingredientEl);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //3dots make the array to be item1, item2, item3...
    this.editIngredients.emit(this.ingredients.slice());
  }
}
