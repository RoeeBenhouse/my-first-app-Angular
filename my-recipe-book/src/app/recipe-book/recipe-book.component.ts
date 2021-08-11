import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  //we want one instance for all recipe's components (and its child components)
  providers: [RecipeService],
})
export class RecipeBookComponent implements OnInit {
  recipeToShowDetails : Recipe | undefined;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeClicked.subscribe(
      (recipe: Recipe) => {
        this.recipeToShowDetails = recipe;
      }
    )
  }
}
