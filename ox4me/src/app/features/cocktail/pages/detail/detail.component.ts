import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Cocktail } from 'src/app/core/models/cocktail.model';
import { CocktailService } from 'src/app/core/services/cocktail-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  cocktail : Cocktail|undefined;

  constructor(private router:ActivatedRoute, private cocktailService:CocktailService) { 

  }

  ngOnInit() {
    const cocktailId:string|null = this.router.snapshot.paramMap.get('id')
    if(cocktailId){
      this.cocktail = this.cocktailService.getCocktailById(cocktailId)
    }
  }

}
