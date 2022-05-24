type Ingredient ={
    name:string
    type:string
}


export type Cocktail= {
    id:number|string
    name:string
    category:string
    alcohol_level:number
    flavors:string[]
    ingredients:Ingredient[]
}
