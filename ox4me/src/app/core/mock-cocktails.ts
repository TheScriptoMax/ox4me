import { Cocktail } from './models/cocktail.model';

export const CocktailList:Cocktail[]=
[
  {
    "id": "gin_tonic",
    "name": "Gin tonic",
    "category": "classic",
    "flavors": ["bitter"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Gin", "type": "liquor"},
      {"name": "Agrumes", "type": "soft"},
      {"name": "Tonic", "type": "soft"}
    ]
  },
  {
    "id": "krakn_stormy",
    "name": "Krak'n Stormy",
    "category": "classic",
    "flavors": ["sweet", "sour"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Sirop Falernum", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Rhum Kraken", "type": "liquor"},
      {"name": "Ginger Beer", "type": "soft"}
    ]
  },
  {
    "id": "cosmopolitain",
    "name": "Cosmopolitain",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Vodka", "type": "liquor"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Jus de cranberry", "type": "soft"},
      {"name": "Citron vert", "type": "soft"}
    ]
  },
  {
    "id": "bramble",
    "name": "Bramble",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Crème cassis", "type": "soft"},
      {"name": "Gin", "type": "liquor"},
      {"name": "Citron jaune", "type": "soft"},
      {"name": "Sirop de sucre de canne", "type": "soft"}
    ]
  },
  {
    "id": "caipi_something",
    "name": "Caipi... Bref t'as compris",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Cachaça", "type": "liquor"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Sucre de canne", "type": "soft"},
      {"name": "Angostura Bitter", "type": "liquor"},
      {"name": "Glace pilée", "type": "soft"}
    ]
  },
  {
    "id": "ti_punch",
    "name": "Ti Punch",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Rhum blanc agricole", "type": "liquor"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Sucre de canne", "type": "soft"},
      {"name": "Angostura Bitter", "type": "liquor"}
    ]
  },
  {
    "id": "spritz",
    "name": "Spritz",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": []
  },
  {
    "id": "necroni",
    "name": "Necroni",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Gin", "type": "liquor"},
      {"name": "Martini Rosso", "type": "liquor"},
      {"name": "Campari", "type": "liquor"},
      {"name": "Tranche d'orange", "type": "soft"}
    ]
  },
  {
    "id": "corpse_reviver_2",
    "name": "Corpse Reviver #2",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Absinthe", "type": "liquor"},
      {"name": "Gin", "type": "liquor"},
      {"name": "Lillet", "type": "liquor"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Citron jaune", "type": "soft"}
    ]
  },
  {
    "id": "corpse_reviver_3",
    "name": "Corpse Reviver #3",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Gin", "type": "liquor"},
      {"name": "Campari", "type": "liquor"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Citron vert", "type": "soft"}
    ]
  },
  {
    "id": "expresso_martini",
    "name": "Expresso Martini",
    "category": "classic",
    "flavors": ["sweet", "creamy"],
    "alcohol_level": 2,
    "ingredients": [
      {"name": "Vodka", "type": "liquor"},
      {"name": "Expresso", "type": "soft"},
      {"name": "Liqueur de café", "type": "liquor"},
      {"name": "Dosette de sucre", "type": "soft"},
      {"name": "Bailey", "type": "liquor"}
    ]
  },
  {
    "id": "casse_noisette",
    "name": "Casse Noisette",
    "category": "classic",
    "flavors": ["sweet", "creamy"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Vodka", "type": "liquor"},
      {"name": "Liqueur café", "type": "liquor"},
      {"name": "Sirop noisette", "type": "soft"},
      {"name": "Crème fraiche", "type": "soft"}
    ]
  },
  {
    "id": "black_russian",
    "name": "Black Russian",
    "category": "classic",
    "flavors": [],
    "alcohol_level": 4,
    "ingredients": [
      {"name": "Vodka", "type": "liquor"},
      {"name": "Liqueur de café", "type": "liquor"}
    ]
  },
  {
    "id": "maree_noire",
    "name": "Marée noire",
    "category": "homemade",
    "flavors": ["sweet"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Jus d'ananas", "type": "soft"},
      {"name": "Jus d'orange", "type": "soft"},
      {"name": "Sirop de grenadine", "type": "soft"},
      {"name": "Pulco", "type": "soft"},
      {"name": "Curaçao", "type": "liquor"},
      {"name": "Rhum Blanc", "type": "liquor"}
    ]
  },
  {
    "id": "traquenard_en_douceur",
    "name": "Traquenard en douceur",
    "category": "homemade",
    "flavors": ["sour"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Citron vert", "type": "soft"},
      {"name": "Sirop de Citron Blanc", "type": "soft"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Ginger Beer", "type": "soft"},
      {"name": "Angostura Bitter", "type": "liquor"}
    ]
  },
  {
    "id": "riviere_pourpre",
    "name": "Rivière pourpre",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "liqueur de Cassis", "type": "liquor"},
      {"name": "Vodka", "type": "liquor"},
      {"name": "Ginger Beer", "type": "soft"},
      {"name": "Citron Jaune", "type": "soft"}
    ]
  },
  {
    "id": "ptit_biscuit",
    "name": "P'tit biscuit",
    "category": "homemade",
    "flavors": ["sweet", "creamy"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Citron Jaune", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Sirop de Citron Blanc", "type": "soft"},
      {"name": "Sirop de Noix de Macadamia", "type": "soft"},
      {"name": "Jus de Pomme", "type": "soft"},
      {"name": "Vodka", "type": "liquor"},
      {"name": "Crème fraîche", "type": "soft"}
    ]
  },
  {
    "id": "le_petit_pres",
    "name": "Le petit près",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 4,
    "ingredients": [
      {"name": "Pulco", "type": "soft"},
      {"name": "Curaçao", "type": "liquor"},
      {"name": "Rinquinquin", "type": "liquor"},
      {"name": "Absinthe", "type": "liquor"}
    ]
  },
  {
    "id": "kernel_daddy_cage",
    "name": "Kernel daddy cage",
    "category": "homemade",
    "flavors": ["sweet"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Sirop ChocoCookie", "type": "soft"},
      {"name": "Orange Pressée", "type": "soft"},
      {"name": "Sirop de Noix de Macadamia", "type": "soft"},
      {"name": "Vodka", "type": "liquor"},
      {"name": "Amaretto", "type": "liquor"},
      {"name": "Citron Jaune", "type": "soft"}
    ]
  },
  {
    "id": "ca_remet_le_facteur_sur_le_velo",
    "name": "Ça remet le facteur sur le vélo",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 4,
    "ingredients": [
      {"name": "Calvados", "type": "liquor"},
      {"name": "Sucre de Canne", "type": "soft"},
      {"name": "Limonade", "type": "soft"},
      {"name": "Angostura Bitter", "type": "liquor"}
    ]
  },
  {
    "id": "la_cordée",
    "name": "La Cordée",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "St Germain", "type": "liquor"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Ginger Beer", "type": "soft"},
      {"name": "Angostura Bitter", "type": "liquor"}
    ]
  },
  {
    "id": "devils_deal",
    "name": "Devil's deal",
    "category": "homemade",
    "flavors": ["spicy"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Cognac", "type": "liquor"},
      {"name": "Crème Cassis", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Tabasco", "type": "soft"},
      {"name": "Glace Pilée", "type": "soft"}
    ]
  },
  {
    "id": "23_le_throne_de_fer",
    "name": "Le throne de fer",
    "category": "homemade",
    "flavors": ["sweet"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Jus de Cranberry", "type": "soft"},
      {"name": "Jus d'orange", "type": "soft"},
      {"name": "Rhum Ambré", "type": "liquor"},
      {"name": "Calvados", "type": "liquor"},
      {"name": "Canadou", "type": "soft"},
      {"name": "Gouttes de curaçao", "type": "liquor"},
      {"name": "Citron vert", "type": "soft"}
    ]
  },
  {
    "id": "le_bon_dej",
    "name": "Le bon déj'",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Latte Macchiato", "type": "soft"},
      {"name": "Liqueur de Cacao", "type": "liquor"},
      {"name": "Sirop ChocoCookie", "type": "soft"}
    ]
  },
  {
    "id": "blue_dive",
    "name": "Blue dive",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Tequila", "type": "liquor"},
      {"name": "Purée de yuzu", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Curaçao", "type": "liquor"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Ginger Ale", "type": "soft"}
    ]
  },
  {
    "id": "la_dame_des_prebendes",
    "name": "La dame des prébendes",
    "category": "homemade",
    "flavors": ["sweet"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Jus de Cranberry", "type": "soft"},
      {"name": "Jus d'ananas", "type": "soft"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Liqueur de Fraise des bois", "type": "liquor"},
      {"name": "Curaçao", "type": "liquor"},
      {"name": "Sirop de Grenadine", "type": "soft"},
      {"name": "Pétillant", "type": "liquor"}
    ]
  },
  {
    "id": "il_est_frais_le_gardon",
    "name": "Il est frais le gardon",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Vodka", "type": "liquor"},
      {"name": "Chartreuse", "type": "liquor"},
      {"name": "Liqueur de Mûre", "type": "liquor"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Sirop de Gingembre", "type": "soft"},
      {"name": "Jus de Cranberry", "type": "soft"}
    ]
  },
  {
    "id": "le_mama",
    "name": "Le mama",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Jus d'ananas", "type": "soft"},
      {"name": "Sirop de Falernum", "type": "soft"},
      {"name": "Sirop de Vanille", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Gin bombay", "type": "liquor"}
    ]
  },
  {
    "id": "fais_confiance",
    "name": "Fais confiance",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Citron Jaune", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Orange", "type": "soft"},
      {"name": "Miel", "type": "soft"},
      {"name": "Tequila || Vodka", "type": "liquor"}
    ]
  },
  {
    "id": "foie_de_coton",
    "name": "Foie de coton",
    "category": "homemade",
    "flavors": ["sweet", "creamy"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Rhum Blanc", "type": "liquor"},
      {"name": "Sirop de Coco", "type": "soft"},
      {"name": "Sirop de Kiwi", "type": "soft"},
      {"name": "Jus d'ananas", "type": "soft"},
      {"name": "Citron Jaune", "type": "soft"},
      {"name": "Crème fraiche", "type": "soft"}
    ]
  },
  {
    "id": "desperate_housewives",
    "name": "Desperate housewives",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Jus de Framboise", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Sirop de Vanille", "type": "soft"},
      {"name": "Noix de Muscade", "type": "soft"},
      {"name": "Tequila", "type": "liquor"}
    ]
  },
  {
    "id": "no_name",
    "name": "???",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Tequila Gold", "type": "liquor"},
      {"name": "Curaçao", "type": "liquor"},
      {"name": "Pulco", "type": "soft"},
      {"name": "Yuzu", "type": "soft"},
      {"name": "St Germain", "type": "liquor"},
      {"name": "Ginger Beer", "type": "soft"}
    ]
  },
  {
    "id": "ca_rhabille_la_gamine",
    "name": "Ça rhabille la gamine",
    "category": "homemade",
    "flavors": ["sweet"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Jus de framboise", "type": "soft"},
      {"name": "Liqueur de cassis", "type": "liquor"},
      {"name": "Liqueur de St Germain", "type": "liquor"},
      {"name": "Eau de vie de poire", "type": "liquor"},
      {"name": "Curaçao", "type": "liquor"}
    ]
  },
  {
    "id": "tex_on_the_bitch",
    "name": "Tex on the bitch",
    "category": "homemade",
    "flavors": ["sweet"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Jus d'ananas", "type": "soft"},
      {"name": "Sirop de Concombre", "type": "soft"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Vodka", "type": "liquor"}
    ]
  },
  {
    "id": "tiniac",
    "name": "Tignac",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Sirop de Cerise", "type": "soft"},
      {"name": "Cognac aux Amandes", "type": "liquor"},
      {"name": "Citron Jaune", "type": "soft"},
      {"name": "Maté", "type": "soft"}
    ]
  },
  {
    "id": "attrape_moi_si_tu_peux",
    "name": "Attrape-moi si tu peux",
    "category": "homemade",
    "flavors": ["sour", "bitter"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Citron vert", "type": "soft"},
      {"name": "Jus de Pommes", "type": "soft"},
      {"name": "Jus de Cranberry", "type": "soft"},
      {"name": "SUZE", "type": "liquor"},
      {"name": "Crème aux fruits rouges", "type": "soft"}
    ]
  },
  {
    "id": "lady_first",
    "name": "Lady first",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 5,
    "ingredients": [
      {"name": "Rhum Blanc", "type": "liquor"},
      {"name": "Martini Blanc", "type": "liquor"},
      {"name": "Cointreau", "type": "liquor"},
      {"name": "Sirop de Gingembre", "type": "soft"}
    ]
  },
  {
    "id": "carapuce",
    "name": "Carapuce",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Curaçao", "type": "liquor"},
      {"name": "St Germain", "type": "liquor"},
      {"name": "Gin", "type": "liquor"},
      {"name": "Jus d'ananas", "type": "soft"},
      {"name": "Jus de Pommes", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Baie Timur", "type": "soft"}
    ]
  },
  {
    "id": "fucking_bloody_thursday",
    "name": "Fucking bloody thursday",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Liqueur de Cassis", "type": "liquor"},
      {"name": "Sirop de Framboise", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Multifruit / Ale", "type": "soft"},
      {"name": "Gin", "type": "liquor"},
      {"name": "Glace Pilée", "type": "soft"}
    ]
  },
  {
    "id": "le_petit_fiacre",
    "name": "Le petit fiacre",
    "category": "homemade",
    "flavors": ["sweet", "creamy"],
    "alcohol_level": 2,
    "ingredients": [
      {"name": "Expresso", "type": "soft"},
      {"name": "Bailey", "type": "liquor"},
      {"name": "Liqueur de Café", "type": "liquor"},
      {"name": "Vodka", "type": "liquor"},
      {"name": "Sirop de ChocoCookie", "type": "soft"}
    ]
  },
  {
    "id": "chico_mou",
    "name": "Chico mou",
    "category": "homemade",
    "flavors": ["sweet"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Gold Strike", "type": "liquor"},
      {"name": "Amaretto", "type": "liquor"},
      {"name": "Vermouth", "type": "liquor"},
      {"name": "Pulco", "type": "soft"},
      {"name": "Jus de Pomme", "type": "soft"},
      {"name": "Orange", "type": "soft"}
    ]
  },
  {
    "id": "eau_de_sirene",
    "name": "Eau de sirène",
    "category": "homemade",
    "flavors": ["sour"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Citron Jaune", "type": "soft"},
      {"name": "Curaçao", "type": "liquor"},
      {"name": "Gin Bombay", "type": "liquor"},
      {"name": "Canadou", "type": "soft"},
      {"name": "Jus de Pomme", "type": "soft"}
    ]
  },
  {
    "id": "lance_de_triton",
    "name": "Lance de triton",
    "category": "homemade",
    "flavors": ["sour"],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Sirop de Curaçao", "type": "liquor"},
      {"name": "Jus d'orange", "type": "soft"},
      {"name": "Ice Tea", "type": "soft"},
      {"name": "Citron vert", "type": "soft"},
      {"name": "Canadou", "type": "soft"},
      {"name": "Vodka", "type": "liquor"}
    ]
  },
  {
    "id": "newt",
    "name": "Le Newt",
    "category": "homemade",
    "flavors": [],
    "alcohol_level": 3,
    "ingredients": [
      {"name": "Vodka", "type": "liquor"},
      {"name": "Amaretto", "type": "liquor"},
      {"name": "Jus d'ananas", "type": "soft"},
      {"name": "Sirop de banane", "type": "soft"}
    ]
  }
]