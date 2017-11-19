import { element } from 'protractor';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { IIngredient } from './../../models/IIngredient';
import { IRecipe } from './../../models/IRecipe';
import { RecipeService } from './../../services/recipe/recipe.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId:number;
  selectedRecipe:IRecipe;
  ingredientArr:IIngredient[];
  constructor(private _route:ActivatedRoute,private _recipeService:RecipeService,private _shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this._route.params.subscribe((params)=>{
      this.recipeId=+params.recipeId;
      this.selectedRecipe=this._recipeService.getRecipeById(this.recipeId);
      this.ingredientArr=this.selectedRecipe.ingredientArr;
    });
  }
  toShoppingList(){
    this.selectedRecipe.ingredientArr.forEach(element=>{
      this._shoppingListService.addToShoppingList(element);
    });
  }
  onDelete(){
    this._recipeService.getRecipeList().forEach(element=>{
      if(element.id===this.recipeId){
        this._recipeService.getRecipeList().splice(this._recipeService.getRecipeList().indexOf(element),1);
      }
    })
  }

}
