import { element } from 'protractor';
import { IIngredient } from './../../models/IIngredient';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  found:boolean;
  ingredientList:IIngredient[]=[
    {name:'Tomato',quantity:50},
    {name:'Carrots',quantity:14}
  ];
  constructor() { 
  }
  getIngList(){
    return this.ingredientList;
  }
  addToShoppingList(ing){
    this.ingredientList.forEach(element=>{
      if(element.name==ing.name){
        this.found=true;
        ing.quantity=Number(ing.quantity)+Number(element.quantity);
        this.ingredientList.splice(this.ingredientList.indexOf(element),1,ing)
      }
    });
    if(this.found===false){
    this.ingredientList.push(ing);
    }
    this.found=false;
  }
}
