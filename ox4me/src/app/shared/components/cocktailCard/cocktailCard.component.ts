import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from 'src/app/core/models/cocktail.model';

@Component({
  selector: 'app-cocktailCard',
  templateUrl: './cocktailCard.component.html',
  styleUrls: ['./cocktailCard.component.scss']
})
export class CocktailCardComponent implements OnInit {

  cocktailItem:Cocktail|undefined;

  @Input() cocktail:Cocktail|undefined;

  constructor() { 
    
  }

  ngOnInit() {
    this.cocktailItem=this.cocktail
  }

}
