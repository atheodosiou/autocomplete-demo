/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
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
export { NgAutocompleteComponent };
if (false) {
    /** @type {?} */
    NgAutocompleteComponent.prototype.style;
    /** @type {?} */
    NgAutocompleteComponent.prototype.placeholder;
    /** @type {?} */
    NgAutocompleteComponent.prototype.adressType;
    /** @type {?} */
    NgAutocompleteComponent.prototype.setAddress;
    /** @type {?} */
    NgAutocompleteComponent.prototype.addresstext;
    /** @type {?} */
    NgAutocompleteComponent.prototype.autocompleteInput;
    /** @type {?} */
    NgAutocompleteComponent.prototype.queryWait;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ3BsYWNlLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ncGxhY2UtYXV0b2NvbXBsZXRlLyIsInNvdXJjZXMiOlsibGliL25nLWdwbGFjZS1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUV6RztJQU9FO1FBRVMsZ0JBQVcsR0FBVyxtQkFBbUIsQ0FBQTtRQUV4QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFKN0MsQ0FBQzs7OztJQVNqQiwwQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QixDQUFDOzs7O0lBQ0QsaURBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTyxzREFBb0I7Ozs7SUFBNUI7UUFBQSxpQkFVQzs7WUFUTyxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQ3JGO1lBQ0UscUJBQXFCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3hDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBRSxzQ0FBc0M7U0FDakUsQ0FBQztRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsZUFBZTs7O1FBQUU7O2dCQUNyRCxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBYTtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFyQ0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLG1JQUFzRDs7aUJBRXZEOzs7Ozt3QkFJRSxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxNQUFNOzhCQUNOLFNBQVMsU0FBQyxjQUFjLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQTBCM0MsOEJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQWpDWSx1QkFBdUI7OztJQUdsQyx3Q0FBb0I7O0lBQ3BCLDhDQUFrRDs7SUFDbEQsNkNBQTRCOztJQUM1Qiw2Q0FBNkQ7O0lBQzdELDhDQUE0RDs7SUFDNUQsb0RBQTBCOztJQUMxQiw0Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9nb29nbGVtYXBzL2luZGV4LmQudHNcIi8+XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctZ3BsYWNlLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLWdwbGFjZS1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0F1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWFyY2ggYW4gYWRkcmVzcydcbiAgQElucHV0KCkgYWRyZXNzVHlwZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgc2V0QWRkcmVzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2F1dG9jb21wbGV0ZScse3N0YXRpYzogZmFsc2V9KSBhZGRyZXNzdGV4dDogYW55O1xuICBhdXRvY29tcGxldGVJbnB1dDogc3RyaW5nO1xuICBxdWVyeVdhaXQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdHlsZSlcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5nZXRQbGFjZUF1dG9jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGFjZUF1dG9jb21wbGV0ZSgpIHtcbiAgICBjb25zdCBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZSh0aGlzLmFkZHJlc3N0ZXh0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczogeyBjb3VudHJ5OiAnR1InIH0sXG4gICAgICAgIHR5cGVzOiBbdGhpcy5hZHJlc3NUeXBlXSAgLy8gJ2VzdGFibGlzaG1lbnQnfCdhZGRyZXNzJ3wnZ2VvY29kZSdcbiAgICAgIH0pO1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGF1dG9jb21wbGV0ZSwgJ3BsYWNlX2NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBwbGFjZSA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xuICAgICAgdGhpcy5pbnZva2VFdmVudChwbGFjZSk7XG4gICAgfSk7XG4gIH1cblxuICBpbnZva2VFdmVudChwbGFjZTogT2JqZWN0KSB7XG4gICAgdGhpcy5zZXRBZGRyZXNzLmVtaXQocGxhY2UpO1xufVxufVxuIl19