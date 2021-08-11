import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const nameInput = this.nameInputRef.nativeElement.value;
    const amountInput = parseInt(this.amountInputRef.nativeElement.value);
    const ingredientToAdd = new Ingredient(nameInput, amountInput);
    this.shoppingListService.onAction({ingredient: ingredientToAdd, action : "add"});
  }

  onDeleteIngredient() {
    const nameInput = this.nameInputRef.nativeElement.value;
    const amountInput = parseInt(this.amountInputRef.nativeElement.value);
    const ingredientToDelete = new Ingredient(nameInput, amountInput);
    this.shoppingListService.onAction({ingredient: ingredientToDelete, action : "delete"});
  }

  onClearIngredients() {
    const ingredientToDelete = new Ingredient("never mind", 0);
    this.shoppingListService.onAction({ingredient: ingredientToDelete, action : "clear"});
  }
}
