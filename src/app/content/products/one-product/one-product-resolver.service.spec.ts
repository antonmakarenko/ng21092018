import { TestBed } from '@angular/core/testing';

import { OneProductResolverService } from './one-product-resolver.service';

describe('OneProductResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneProductResolverService = TestBed.get(OneProductResolverService);
    expect(service).toBeTruthy();
  });
});
