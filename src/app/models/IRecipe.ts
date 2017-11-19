import { IIngredient } from './IIngredient';
export interface IRecipe{
    id:number,
    name:string,
    imgUrl:string,
    description:string,
    ingredientArr:IIngredient[]
}