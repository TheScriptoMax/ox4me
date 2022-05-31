import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { CocktailCardComponent } from './components/cocktailCard/cocktailCard.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterBarComponent } from './components/filterBar/filterBar.component';



@NgModule({
  declarations: [
    CocktailCardComponent,
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  exports:[
    CocktailCardComponent,
    FilterBarComponent,
  ]
})
export class SharedModule { }
