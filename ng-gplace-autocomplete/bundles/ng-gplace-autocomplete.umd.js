(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-gplace-autocomplete', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = global || self, factory(global['ng-gplace-autocomplete'] = {}, global.ng.core, global.ng.common, global.ng.forms));
}(this, function (exports, core, common, forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgGplaceAutocompleteService = /** @class */ (function () {
        function NgGplaceAutocompleteService() {
        }
        NgGplaceAutocompleteService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgGplaceAutocompleteService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgGplaceAutocompleteService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgGplaceAutocompleteService_Factory() { return new NgGplaceAutocompleteService(); }, token: NgGplaceAutocompleteService, providedIn: "root" });
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
            this.setAddress = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ng-autocomplete',
                        template: "<input #autocomplete type=\"text\" [ngStyle]=\"style\" [placeholder]=\"placeholder\" [(ngModel)]=\"autocompleteInput\">",
                        styles: ["input{margin:0;border:1px solid #778899}"]
                    }] }
        ];
        /** @nocollapse */
        NgAutocompleteComponent.ctorParameters = function () { return []; };
        NgAutocompleteComponent.propDecorators = {
            style: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            adressType: [{ type: core.Input }],
            setAddress: [{ type: core.Output }],
            addresstext: [{ type: core.ViewChild, args: ['autocomplete', { static: false },] }]
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
            { type: core.NgModule, args: [{
                        declarations: [NgAutocompleteComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        exports: [NgAutocompleteComponent]
                    },] }
        ];
        return NgAutocompleteModule;
    }());

    exports.NgAutocompleteComponent = NgAutocompleteComponent;
    exports.NgAutocompleteModule = NgAutocompleteModule;
    exports.NgGplaceAutocompleteService = NgGplaceAutocompleteService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-gplace-autocomplete.umd.js.map
