import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
export declare class NgAutocompleteComponent implements OnInit, AfterViewInit {
    constructor();
    style: any;
    placeholder: string;
    adressType: string;
    setAddress: EventEmitter<any>;
    addresstext: any;
    autocompleteInput: string;
    queryWait: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private getPlaceAutocomplete;
    invokeEvent(place: Object): void;
}
