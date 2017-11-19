import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipeData;
  @Input() isQuery;
  constructor() { }

  ngOnInit() {
  }

}
