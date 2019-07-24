import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGplaceAutocompleteComponent } from './ng-gplace-autocomplete.component';

describe('NgGplaceAutocompleteComponent', () => {
  let component: NgGplaceAutocompleteComponent;
  let fixture: ComponentFixture<NgGplaceAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGplaceAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGplaceAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
