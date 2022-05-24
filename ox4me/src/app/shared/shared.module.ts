import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailCardComponent } from './components/cocktailCard/cocktailCard.component';



@NgModule({
  declarations: [CocktailCardComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    CocktailCardComponent
  ]
})
export class SharedModule { }
