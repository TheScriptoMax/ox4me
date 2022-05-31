import { Component, OnInit, Output,Input ,EventEmitter } from '@angular/core';
import { Filter } from 'src/app/core/models/filter.model';
import { CocktailService } from 'src/app/core/services/cocktail-service.service';


@Component({
  selector: 'app-filterBar',
  templateUrl: './filterBar.component.html',
  styleUrls: ['./filterBar.component.scss']
})
export class FilterBarComponent implements OnInit {
  flavors:string[] = []
  flavor:string|null=null;
  favCheck:boolean=false
  categories:string[] = []
  category:string="All";

  @Input() buttonName:string="" 
  @Input() fav:boolean=true 

  constructor(private cocktailService:CocktailService) { 


  }

  ngOnInit() {
    this.flavors = this.cocktailService.getCocktailFlavors()
    this.categories=this.cocktailService.getCocktailCategories()
  }


  handleSubmit(event:MouseEvent):void{
    event.preventDefault()
    const filterOption:Filter={
      category:this.category,
      flavor:this.flavor,
      favorite:this.favCheck
    }
    console.log(filterOption)
  }

}
