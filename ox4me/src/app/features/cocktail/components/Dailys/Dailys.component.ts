import { Component, OnInit } from '@angular/core';
import { CocktailList } from 'src/app/core/mock-cocktails';
import { Cocktail } from 'src/app/core/models/cocktail.model';
import { CocktailService } from '../../../../core/services/cocktail-service.service';

@Component({
  selector: 'app-Dailys',
  templateUrl: './Dailys.component.html',
  styleUrls: ['./Dailys.component.scss']
})
export class DailysComponent implements OnInit {
  
  cocktails:Cocktail[]=[];
  

  constructor(private cocktailService:CocktailService) {
  }

  ngOnInit() {
    this.cocktails=this.cocktailService.getCocktailList()
  }
  
}
