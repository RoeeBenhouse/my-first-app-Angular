import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-recipe-book';
  pageNum: number = 1;

  onNavigate(page: string) {
    this.pageNum = (page === 'recipes') ? 1 :
      (page === 'shoppingList') ? 2 : 0;
  }
}
