import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgGplaceAutocompleteService {
    constructor() { }
}
NgGplaceAutocompleteService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgGplaceAutocompleteService.ctorParameters = () => [];
/** @nocollapse */ NgGplaceAutocompleteService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgGplaceAutocompleteService_Factory() { return new NgGplaceAutocompleteService(); }, token: NgGplaceAutocompleteService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { FormGroup, FormBuilder } from '@angular/forms';
class NgAutocompleteComponent {
    constructor() {
        this.placeholder = 'Search an address';
        this.setAddress = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.style);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }
    /**
     * @private
     * @return {?}
     */
    getPlaceAutocomplete() {
        /** @type {?} */
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            componentRestrictions: { country: 'GR' },
            types: [this.adressType] // 'establishment'|'address'|'geocode'
        });
        google.maps.event.addListener(autocomplete, 'place_changed', (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        }));
    }
    /**
     * @param {?} place
     * @return {?}
     */
    invokeEvent(place) {
        this.setAddress.emit(place);
    }
}
NgAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-autocomplete',
                template: "<input #autocomplete type=\"text\" [ngStyle]=\"style\" [placeholder]=\"placeholder\" [(ngModel)]=\"autocompleteInput\">",
                styles: ["input{margin:0;border:1px solid #778899}"]
            }] }
];
/** @nocollapse */
NgAutocompleteComponent.ctorParameters = () => [];
NgAutocompleteComponent.propDecorators = {
    style: [{ type: Input }],
    placeholder: [{ type: Input }],
    adressType: [{ type: Input }],
    setAddress: [{ type: Output }],
    addresstext: [{ type: ViewChild, args: ['autocomplete', { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgAutocompleteModule {
}
NgAutocompleteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgAutocompleteComponent],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [NgAutocompleteComponent]
            },] }
];

export { NgAutocompleteComponent, NgAutocompleteModule, NgGplaceAutocompleteService };
//# sourceMappingURL=ng-gplace-autocomplete.js.map
