import { element } from 'protractor';
import { IRecipe } from './../../models/IRecipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(recipeArr: IRecipe[], query:string): IRecipe[] {
    let modRecipeArr:IRecipe[]=[];
    if(query){
      query=query.toLowerCase();
      return recipeArr.filter(function (element: IRecipe) {
        return element.name.toLowerCase().indexOf(query) > -1 || 
        element.description.toLowerCase().indexOf(query) > -1 ||
        (function(){
          for(let i=0;i<element.ingredientArr.length;i++){
            if(element.ingredientArr[i].name.toLowerCase().indexOf(query) > -1){
              return true;
            }
          }
        })(); 
    })
    }
    return recipeArr;
  }

}
