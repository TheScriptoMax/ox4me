import { Flavor } from "./flavor.model"

export type Filter= {
    category:string
    flavor:string|null
    favorite:boolean
}