import { element } from 'protractor';
import { FormGroup } from '@angular/forms';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { IIngredient } from './../../models/IIngredient';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingList:IIngredient[]=[];
  ingr:IIngredient;
  updateMode:boolean=false;
  selectedIngr:IIngredient;
  constructor(private _shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingList=this._shoppingListService.getIngList();
    this.ingr={name:'',quantity:null};
  }
  onSelect(ing){
    this.ingr=ing;
    this.updateMode=true;
  }
  onDelete(){
    if(this.ingr){
      this.ingList.forEach(element=>{
        if(element.name===this.ingr.name){
          this.ingList.splice(this.ingList.indexOf(element),1);
        }
      });
    }
    this.updateMode=false;
    this.ingr={name:'',quantity:null};
  }
  onAdd(name:string,quantity:number){
    let tempIngr:IIngredient={name:name,quantity:quantity};
    this._shoppingListService.addToShoppingList(tempIngr);
  }
  onUpdate(name,quantity){
    let tempIngr:IIngredient={name:name,quantity:quantity};
    this.ingList.forEach(element=>{
      if(element.name===this.ingr.name){
        this.ingList[this.ingList.indexOf(element)]=tempIngr;
      }
    });
  }
}
