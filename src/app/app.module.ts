import { CanDeactivateGuardGuard } from './guards/can-deactivate-guard.guard';
import { ShoppingListService } from './services/shopping-list/shopping-list.service';
import { RecipeService } from './services/recipe/recipe.service';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeDefaultDetailsComponent } from './components/recipe-default-details/recipe-default-details.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeEditFormComponent } from './components/recipe-edit-form/recipe-edit-form.component';
import { RecipeNewFormComponent } from './components/recipe-new-form/recipe-new-form.component';
import { RecipeListItemComponent } from './components/recipe-list-item/recipe-list-item.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    ShoppingListComponent,
    RecipeDefaultDetailsComponent,
    RecipeDetailsComponent,
    RecipeEditFormComponent,
    RecipeNewFormComponent,
    RecipeListItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RecipeService,ShoppingListService,CanDeactivateGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
