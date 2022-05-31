import { Injectable } from '@angular/core';
import { CocktailList } from '../mock-cocktails'
import { Cocktail } from '../models/cocktail.model';
import { Filter } from '../models/filter.model';
import { Flavor } from '../models/flavor.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  // Get Cocktail List

  getCocktailList():Cocktail[] {
    return CocktailList
  }

  // Get Cocktail by Id

  getCocktailById(cocktailId:string):Cocktail|undefined{
    return CocktailList.find(cocktail=>cocktail.id == cocktailId)
  }

  // Get Cocktail flavor
  getCocktailFlavors():string[]{
    return ["Sour",
    "Bitter",
    "Spicey",
    "Creamy",
    "Sweet"
    ]
  }

  getCocktailCategories():string[]{
    return [
      "Homemade",
      "Classic"
    ]
  }

  // Get Random Cocktail
  /* getRandomCocktail(filter:Filter):Cocktail|undefined{
    const filteredArray = CocktailList.filter(cocktail=>{
    })
    
    
    
    return 
    
  } */

  // Get Cocktail Ingredients


}
