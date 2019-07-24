import { TestBed } from '@angular/core/testing';

import { NgGplaceAutocompleteService } from './ng-gplace-autocomplete.service';

describe('NgGplaceAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGplaceAutocompleteService = TestBed.get(NgGplaceAutocompleteService);
    expect(service).toBeTruthy();
  });
});
