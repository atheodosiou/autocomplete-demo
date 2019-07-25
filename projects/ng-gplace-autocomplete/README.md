# NgGplaceAutocomplete

Angular google autocomplete component

## Installation
npm install --save @types/googlemaps

Then link google maps javascript api in your index.html with YOUR_KEY

<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=YOUR_KEY"></script>

After that, import NgAutocompleteModule to your project and use the auto complete component like bellow

### For Residential Address:

<ng-autocomplete adressType="geocode" [style]="{'width':'400px','font-size':'1.1em'}" (setAddress)="setAddress($event)"></ng-autocomplete>

### For Office Address:

<ng-autocomplete adressType="establishment" [style]="{'width':'400px','font-size':'1.1em'}" (setAddress)="setAddress($event)"></ng-autocomplete>

On component file getAddress / getEstablishmentAddress method will emit place object which can be parsed to show on screen in required format.

...
getAddress(place: object) { 
   this.address = place[‘formatted_address’];
...

#### GitHub repository: 
https://github.com/atheodosiou/autocomplete-demo
