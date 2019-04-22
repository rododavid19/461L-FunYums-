export class Diet {
  id: number;
  shortDescription: string;
  searchValue: string;
}

export class Allergy {
  id: number;
  shortDescription: string;
  searchValue: string;
}

export const DIETS: Diet[] = [
  { id: 406,
    shortDescription: 'Ketogenic',
    searchValue: '406^Ketogenic'
  },
  { id: 388,
    shortDescription: 'Lacto vegetarian',
    searchValue: '388^Lacto vegetarian'
  },
  { id: 389,
    shortDescription: 'Ovo vegetarian',
    searchValue: '389^Ovo vegetarian'
  },
  { id: 390,
    shortDescription: 'Pescetarian',
    searchValue: '390^Pescetarian'
  },
  { id: 386,
    shortDescription: 'Vegan'
    , searchValue: '386^Vegan'
  },
  {id: 408,
    shortDescription: 'Low FODMAP',
    searchValue: '408^LowFODMAP'
  },
  { id: 387,
    shortDescription: 'Lacto-ovo vegetarian',
    searchValue: '387^Lacto-ovo vegetarian'
  },
  { id: 403,
    shortDescription: 'Paleo',
    searchValue: '403^Paleo'
  },
  {id: 387,
    shortDescription: 'Vegetarian',
    searchValue: '387^Lacto-ovo vegetarian'
  }
];

export const ALLERGIES: Allergy[] = [
  {id: 393,
    shortDescription: 'Gluten',
    searchValue: '393^Gluten-Free'
  },
  {id: 394, shortDescription: 'Peanut',
    searchValue: '394^Peanut-Free'
  },
  {id: 398,
    shortDescription: 'Seafood',
    searchValue: '398^Seafood-Free'},
  {id: 399,
    shortDescription: 'Sesame',
    searchValue: '399^Sesame-Free',
    },
  {id: 400,
    shortDescription: 'Soy',
    searchValue: '400^Soy-Free',
  },
  {id: 396,
    shortDescription: 'Dairy',
    searchValue: '396^Dairy-Free'
  },
  {id: 397,
    shortDescription: 'Egg',
    searchValue: '397^Egg-Free'
  },
  {id: 401,
    shortDescription: 'Sulfite',
    searchValue: '401^Sulfite-Free'
  },
  {id: 395,
    shortDescription: 'Tree Nut',
    searchValue: '395^Tree Nut-Free'
  },
  {id: 392,
    shortDescription: 'Wheat',
    searchValue: '392^Wheat-Free'}
];
