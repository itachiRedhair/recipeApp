import { element } from 'protractor';
import { IIngredient } from './../../models/IIngredient';
import { IRecipe } from './../../models/IRecipe';
import { Injectable } from '@angular/core';
@Injectable()
export class RecipeService {
  ingredient1:IIngredient[]=[
    {name:'paneer',quantity:10},
    {name:'oil',quantity:5},
    {name:'kadai', quantity:1}
  ];
  ingredient2:IIngredient[]=[
    {name:'Potato',quantity:2},
    {name:'Onion',quantity:3},
    {name:'Mutter', quantity:20}
  ];
  recipeArr:IRecipe[]=[
    { id:1,
      name:'Paneer Kadai',
      description:'Very tasty masaledar indian food served with naan or roti',
      imgUrl:'http://vegecravings.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg',
      ingredientArr:this.ingredient1
    },
    { id:2,
      name:'Samosa',
      description:'Shaped like somewhat tetrahedron and very oily and spicy indian food item',
      imgUrl:'https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=750%2C715',
      ingredientArr:this.ingredient2
    }

  ];
  constructor() { }

  getRecipeList(){
    return this.recipeArr;
  }

  getRecipeById(id:number){
    let recipe:IRecipe;
    this.recipeArr.forEach(element=>{
      if(element.id===id){
        recipe=element;
      }
    });
    return recipe;
  }
  setRecipeWithId(id,recipe){
    this.recipeArr.forEach(element=>{
      if(element.id===id){
        this.recipeArr[this.recipeArr.indexOf(element)]=recipe;
      }
    });
  }
}
