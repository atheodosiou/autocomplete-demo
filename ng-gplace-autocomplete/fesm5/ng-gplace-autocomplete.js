import { ɵɵdefineInjectable, Injectable, Component, Input, Output, ViewChild, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgGplaceAutocompleteService = /** @class */ (function () {
    function NgGplaceAutocompleteService() {
    }
    NgGplaceAutocompleteService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgGplaceAutocompleteService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgGplaceAutocompleteService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgGplaceAutocompleteService_Factory() { return new NgGplaceAutocompleteService(); }, token: NgGplaceAutocompleteService, providedIn: "root" });
    return NgGplaceAutocompleteService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { FormGroup, FormBuilder } from '@angular/forms';
var NgAutocompleteComponent = /** @class */ (function () {
    function NgAutocompleteComponent() {
        this.placeholder = 'Search an address';
        this.setAddress = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgAutocompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.style);
    };
    /**
     * @return {?}
     */
    NgAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.getPlaceAutocomplete();
    };
    /**
     * @private
     * @return {?}
     */
    NgAutocompleteComponent.prototype.getPlaceAutocomplete = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            componentRestrictions: { country: 'GR' },
            types: [this.adressType] // 'establishment'|'address'|'geocode'
        });
        google.maps.event.addListener(autocomplete, 'place_changed', (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var place = autocomplete.getPlace();
            _this.invokeEvent(place);
        }));
    };
    /**
     * @param {?} place
     * @return {?}
     */
    NgAutocompleteComponent.prototype.invokeEvent = /**
     * @param {?} place
     * @return {?}
     */
    function (place) {
        this.setAddress.emit(place);
    };
    NgAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-autocomplete',
                    template: "<input #autocomplete type=\"text\" [ngStyle]=\"style\" [placeholder]=\"placeholder\" [(ngModel)]=\"autocompleteInput\">",
                    styles: ["input{margin:0;border:1px solid #778899}"]
                }] }
    ];
    /** @nocollapse */
    NgAutocompleteComponent.ctorParameters = function () { return []; };
    NgAutocompleteComponent.propDecorators = {
        style: [{ type: Input }],
        placeholder: [{ type: Input }],
        adressType: [{ type: Input }],
        setAddress: [{ type: Output }],
        addresstext: [{ type: ViewChild, args: ['autocomplete', { static: false },] }]
    };
    return NgAutocompleteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgAutocompleteModule = /** @class */ (function () {
    function NgAutocompleteModule() {
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
    return NgAutocompleteModule;
}());

export { NgAutocompleteComponent, NgAutocompleteModule, NgGplaceAutocompleteService };
//# sourceMappingURL=ng-gplace-autocomplete.js.map
