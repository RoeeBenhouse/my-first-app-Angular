import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetailsEv = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('Test recipe',
      'This is an description for the test recipe',
      'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg'),
    new Recipe('Test2 recipe',
      'This is an description for the test2 recipe',
      'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipeToShowDetails: Recipe) {
    this.recipeDetailsEv.emit(recipeToShowDetails);
  }
}
