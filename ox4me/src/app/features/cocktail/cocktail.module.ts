import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { CocktailComponent } from './cocktail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './pages/list/list.component';
import { RandomComponent } from './pages/random/random.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { DailysComponent } from './components/Dailys/Dailys.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {path:'home',component:CocktailComponent},
  {path:'list',component:ListComponent},
  {path:'random',component:RandomComponent},
  {path:'favoris',component:FavorisComponent},
  {path:'cocktail/:id',component:DetailComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatIconModule

  ],
  declarations: [
   
    //Pages
    CocktailComponent,
    ListComponent,
    RandomComponent,
    FavorisComponent,
    DailysComponent,
    DetailComponent
  ],
  exports:[
    CocktailComponent
  ]
})
export class CocktailModule { }
