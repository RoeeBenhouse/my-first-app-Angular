import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef!: ElementRef;
  @Output() editIngredients = new EventEmitter<{ ingredient : Ingredient, action : string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.editIngredients.emit(
      { ingredient : new Ingredient(this.nameInputRef.nativeElement.value,
                                  parseInt(this.amountInputRef.nativeElement.value)),
              action : "add" });
  }

  onDeleteIngredient() {
    this.editIngredients.emit(
      { ingredient : new Ingredient(this.nameInputRef.nativeElement.value,
          parseInt(this.amountInputRef.nativeElement.value)),
        action : "delete" });
  }

  onClearIngredients() {
    this.editIngredients.emit(
      { ingredient : new Ingredient("", 0), action : "clear" });
  }
}
