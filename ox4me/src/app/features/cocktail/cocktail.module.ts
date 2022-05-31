import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailComponent } from './cocktail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './pages/list/list.component';
import { RandomComponent } from './pages/random/random.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { DailysComponent } from './components/Dailys/Dailys.component';

const routes: Routes = [
  {path:'home',component:CocktailComponent},
  {path:'list',component:ListComponent},
  {path:'random',component:RandomComponent},
  {path:'favoris',component:FavorisComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ],
  declarations: [
   
    //Pages
    CocktailComponent,
    ListComponent,
    RandomComponent,
    FavorisComponent,
    DailysComponent,
  ],
  exports:[
    CocktailComponent
  ]
})
export class CocktailModule { }
