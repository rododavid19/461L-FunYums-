import { TestBed } from '@angular/core/testing';

import { RecipesGetterService } from './recipes-getter.service';

describe('RecipesGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesGetterService = TestBed.get(RecipesGetterService);
    expect(service).toBeTruthy();
  });
});
