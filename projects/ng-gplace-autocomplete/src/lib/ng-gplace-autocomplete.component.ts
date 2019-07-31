/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, AfterViewInit, NgZone } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'ng-autocomplete',
  templateUrl: './ng-gplace-autocomplete.component.html',
  styleUrls: ['./ng-gplace-autocomplete.component.scss']
})
export class NgAutocompleteComponent implements AfterViewInit {

  constructor(private ngZone: NgZone) { }
  @Input() style: any;
  @Input() placeholder: string = 'Search an address'
  @Input() addressType: string;
  @Input() country: string[] = ['us'];
  @Output() onAddressChange: EventEmitter<any> = new EventEmitter();
  @ViewChild('autocomplete', { static: false }) addresstext: any;

  autocompleteInput: string;
  queryWait: boolean;
  
  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      {
        componentRestrictions: { country: this.country },
        types: [this.addressType] // 'establishment'|'address'|'geocode'
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this.ngZone.run(() => {
        const place = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        // console.log('Inside ng-gplace-autocomplete',place.geometry.location.lat(),place.geometry.location.lng())
        const data = {
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          },
          place: place
        }
        this.invokeEvent(data);
      });
    });
  }

  invokeEvent(place: any) {
    this.onAddressChange.emit(place);
  }
}
