import { FilterPipe } from './../../pipes/filter/filter.pipe';
import { RecipeService } from './../../services/recipe/recipe.service';
import { IRecipe } from './../../models/IRecipe';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeArr:IRecipe[]=[];
  constructor(private _recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeArr=this._recipeService.getRecipeList();
  }
  
}
