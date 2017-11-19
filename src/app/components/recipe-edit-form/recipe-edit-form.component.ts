import { CanDeactivateComponent } from './../../guards/can-deactivate-guard.guard';
import { element } from 'protractor';
import { IIngredient } from './../../models/IIngredient';
import { IRecipe } from './../../models/IRecipe';
import { RecipeService } from './../../services/recipe/recipe.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl,FormArray } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.css']
})
export class RecipeEditFormComponent implements OnInit,CanDeactivateComponent{
  recipeId:number;
  recipeForm:FormGroup;
  recipeArr:IRecipe[]=[];
  ing:IIngredient;
  ingArr:IIngredient[]=[];
  recipe:IRecipe;
  editMode:boolean=true;
  ingFldArr:FormArray=new FormArray([]);
  constructor(private _route:ActivatedRoute,private _recipeService:RecipeService) { }

  ngOnInit() {
    //route material here
      this._route.params.subscribe((params)=>{
        this.recipeId=+params.recipeId;
      });
      this.recipe=this._recipeService.getRecipeById(this.recipeId);
      this.ingArr=this.recipe.ingredientArr;
      this.ingArr.forEach(element=>{
        this.ingFldArr.push(new FormGroup({
          'ingname': new FormControl(element.name,Validators.required),
          'ingamt': new FormControl(element.quantity,Validators.required)
        }));
      });
      this.recipeForm=new FormGroup({
        'name':new FormControl(this.recipe.name,Validators.required),
        'description':new FormControl(this.recipe.description,Validators.required),
        'imgurl':new FormControl(this.recipe.imgUrl,Validators.required),
        'ingFldArr': this.ingFldArr
      });
      this.recipeArr=this._recipeService.getRecipeList();
  }

  addIngFld(){
    let tempFormGroup:FormGroup=new FormGroup({
      'ingname':new FormControl(null,Validators.required),
      'ingamt': new FormControl(null,Validators.required)
    });
    this.ingFldArr.push(tempFormGroup);
  }

  onSave(){
      let tempFormArray:FormArray=this.recipeForm.get('ingFldArr') as FormArray;
      for(let i=0;i<this.ingFldArr.length;i++){
        let tempIng:IIngredient={
          name:tempFormArray.at(i).get('ingname').value,
          quantity:tempFormArray.at(i).get('ingamt').value
        }
        this.ingArr[i]=tempIng;
        console.log(this.ingArr)
      }
      this.recipe={
        id: this.recipe.id,
        name: this.recipeForm.get('name').value,
        description: this.recipeForm.get('description').value,
        imgUrl: this.recipeForm.get('imgurl').value,
        ingredientArr:this.ingArr
      }
      this._recipeService.setRecipeWithId(this.recipeId,this.recipe);
  }
  onClear(){
    this.recipeForm.reset();
    this.ingFldArr.controls=[];
  }
  onDeleteIng(i){
    this.ingFldArr.controls.splice(i,1);
    this.ingArr.splice(i,1);
  }
  canDeactivate(){
    if(this.recipeForm.touched){
      return confirm('Are you sure you don\'t want to edit, because as per my knowledge you just cliked on it?');
    }else{
      return true;
    }
  }
}
