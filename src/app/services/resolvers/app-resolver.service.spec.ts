import { TestBed } from '@angular/core/testing';

import { AppResolver } from './app-resolver.service';

describe('AppResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppResolver = TestBed.get(AppResolver);
    expect(service).toBeTruthy();
  });
});
