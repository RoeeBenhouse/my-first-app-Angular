import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeClicked = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private _recipes : Recipe[] = [
    new Recipe('Test recipe',
      'This is an description for the test recipe',
      'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
    [
      new Ingredient('Cheese', 7),
      new Ingredient('Tomato sauce', 2)
    ]),
      new Recipe('Test222 recipe',
        'This is an description222 for the test recipe',
        'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
        [
          new Ingredient('Cheese', 7),
          new Ingredient('Olives', 2)
        ])
  ];

  getRecipes(): Recipe[] {
    // slice - will return a copy of the array,
    // because we ant all changes to be in the service.
    return this._recipes.slice();
  }

  addIngredientsOfRecipe(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
