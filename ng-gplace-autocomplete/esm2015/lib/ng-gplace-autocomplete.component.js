/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
export class NgAutocompleteComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ3BsYWNlLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ncGxhY2UtYXV0b2NvbXBsZXRlLyIsInNvdXJjZXMiOlsibGliL25nLWdwbGFjZS1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU96RyxNQUFNLE9BQU8sdUJBQXVCO0lBRWxDO1FBRVMsZ0JBQVcsR0FBVyxtQkFBbUIsQ0FBQTtRQUV4QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFKN0MsQ0FBQzs7OztJQVNqQixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQzs7OztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVPLG9CQUFvQjs7Y0FDcEIsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUNyRjtZQUNFLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN4QyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUUsc0NBQXNDO1NBQ2pFLENBQUM7UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLGVBQWU7OztRQUFFLEdBQUcsRUFBRTs7a0JBQzFELEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQXJDQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsbUlBQXNEOzthQUV2RDs7Ozs7b0JBSUUsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTswQkFDTixTQUFTLFNBQUMsY0FBYyxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQUp6Qyx3Q0FBb0I7O0lBQ3BCLDhDQUFrRDs7SUFDbEQsNkNBQTRCOztJQUM1Qiw2Q0FBNkQ7O0lBQzdELDhDQUE0RDs7SUFDNUQsb0RBQTBCOztJQUMxQiw0Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9nb29nbGVtYXBzL2luZGV4LmQudHNcIi8+XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctZ3BsYWNlLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLWdwbGFjZS1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0F1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWFyY2ggYW4gYWRkcmVzcydcbiAgQElucHV0KCkgYWRyZXNzVHlwZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgc2V0QWRkcmVzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2F1dG9jb21wbGV0ZScse3N0YXRpYzogZmFsc2V9KSBhZGRyZXNzdGV4dDogYW55O1xuICBhdXRvY29tcGxldGVJbnB1dDogc3RyaW5nO1xuICBxdWVyeVdhaXQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdHlsZSlcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5nZXRQbGFjZUF1dG9jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGFjZUF1dG9jb21wbGV0ZSgpIHtcbiAgICBjb25zdCBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZSh0aGlzLmFkZHJlc3N0ZXh0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczogeyBjb3VudHJ5OiAnR1InIH0sXG4gICAgICAgIHR5cGVzOiBbdGhpcy5hZHJlc3NUeXBlXSAgLy8gJ2VzdGFibGlzaG1lbnQnfCdhZGRyZXNzJ3wnZ2VvY29kZSdcbiAgICAgIH0pO1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGF1dG9jb21wbGV0ZSwgJ3BsYWNlX2NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBwbGFjZSA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xuICAgICAgdGhpcy5pbnZva2VFdmVudChwbGFjZSk7XG4gICAgfSk7XG4gIH1cblxuICBpbnZva2VFdmVudChwbGFjZTogT2JqZWN0KSB7XG4gICAgdGhpcy5zZXRBZGRyZXNzLmVtaXQocGxhY2UpO1xufVxufVxuIl19