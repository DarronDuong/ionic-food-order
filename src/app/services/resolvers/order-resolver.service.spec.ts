import { TestBed } from '@angular/core/testing';

import { OrderResolver } from './order-resolver.service';

describe('OrderResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderResolver = TestBed.get(OrderResolver);
    expect(service).toBeTruthy();
  });
});
