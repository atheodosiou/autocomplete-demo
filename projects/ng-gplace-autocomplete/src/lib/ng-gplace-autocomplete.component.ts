/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'ng-autocomplete',
  templateUrl: './ng-gplace-autocomplete.component.html',
  styleUrls: ['./ng-gplace-autocomplete.component.scss']
})
export class NgAutocompleteComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input() style: any;
  @Input() placeholder: string = 'Search an address'
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('autocomplete',{static: false}) addresstext: any;
  autocompleteInput: string;
  queryWait: boolean;

  ngOnInit() {
    console.log(this.style)
  }
  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      {
        componentRestrictions: { country: 'GR' },
        types: [this.adressType]  // 'establishment'|'address'|'geocode'
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
}
}
