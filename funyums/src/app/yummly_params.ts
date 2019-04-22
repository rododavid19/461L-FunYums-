export class Diet {
  id: number;
  shortDescription: string;
  searchValue: string;
}

export class Allergy {

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
