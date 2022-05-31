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
  toggleSlide:boolean = false

  @Input() buttonName:string="" 
  constructor(private cocktailService:CocktailService) { 


  }

  ngOnInit() {
    this.flavors = this.cocktailService.getCocktailFlavors()
  }


  handleSubmit(event:MouseEvent):void{
    const filterOption:Filter={
      category:this.toggleSlide?"homemade":"classic",
      flavor:this.flavor,
      favorite:this.favCheck
    }
  }

}
