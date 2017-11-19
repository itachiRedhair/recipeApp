import { CanDeactivateGuardGuard } from './../../guards/can-deactivate-guard.guard';
import { RecipeNewFormComponent } from './../../components/recipe-new-form/recipe-new-form.component';
import { RecipeEditFormComponent } from './../../components/recipe-edit-form/recipe-edit-form.component';
import { RecipeDetailsComponent } from './../../components/recipe-details/recipe-details.component';
import { RecipeDefaultDetailsComponent } from './../../components/recipe-default-details/recipe-default-details.component';
import { ShoppingListComponent } from './../../components/shopping-list/shopping-list.component';
import { RecipeComponent } from './../../components/recipe/recipe.component';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
const appRoutes:Routes=[
  {path:'recipe',component:RecipeComponent,
    children:[
      {path:'default',component:RecipeDefaultDetailsComponent},
      {path:'newform',component:RecipeNewFormComponent,canDeactivate:[CanDeactivateGuardGuard]},
      {path:':recipeId',component:RecipeDetailsComponent},
      {path:':recipeId/editform',component:RecipeEditFormComponent,canDeactivate:[CanDeactivateGuardGuard]},
      {path:'',redirectTo:'default',pathMatch:'full'},
      {path:'**',redirectTo:'default',pathMatch:'full'},
    ]
  },
  {path:'shoppinglist',component:ShoppingListComponent},
  {path:'',redirectTo:'recipe',pathMatch:'full'},
  {path:'**',redirectTo:'recipe',pathMatch:'full'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
