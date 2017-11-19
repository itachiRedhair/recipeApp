import { CanDeactivateComponent } from './../../guards/can-deactivate-guard.guard';
import { IIngredient } from './../../models/IIngredient';
import { IRecipe } from './../../models/IRecipe';
import { RecipeService } from './../../services/recipe/recipe.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl,FormArray } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-recipe-new-form',
  templateUrl: './recipe-new-form.component.html',
  styleUrls: ['./recipe-new-form.component.css']
})
export class RecipeNewFormComponent implements OnInit,CanDeactivateComponent{
  recipeId:number;
  recipeForm:FormGroup;
  recipeArr:IRecipe[]=[];
  ing:IIngredient;
  ingArr:IIngredient[]=[];
  recipe:IRecipe;
  ingFldArr:FormArray=new FormArray([]);
  editMode:boolean=true;
  constructor(private _route:ActivatedRoute,private _recipeService:RecipeService) { }

  ngOnInit() {
    //route material here
      this.recipeForm=new FormGroup({
        'name':new FormControl(null,Validators.required),
        'description':new FormControl(null,Validators.required),
        'imgurl':new FormControl(null,Validators.required),
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
        this.ingArr.push(tempIng);
        console.log(this.ingArr)
      }
      this.recipe={
        id: this.recipeArr.length+1,
        name: this.recipeForm.get('name').value,
        description: this.recipeForm.get('description').value,
        imgUrl: this.recipeForm.get('imgurl').value,
        ingredientArr:this.ingArr
      }
      console.log(this.recipe);
      this.recipeArr.push(this.recipe);
      console.log(this.recipeArr);
      console.log(this._recipeService.getRecipeList());
      this.editMode=false;
  }
  onClear(){
    this.recipeForm.reset();
  }
  onDeleteIng(i){
    this.ingFldArr.controls.splice(i,1);
  }
  canDeactivate(){
    if(this.editMode){
    return confirm('There are unsaved changes, still want to go?');
    }else{
      return true;
    }
  }
}
