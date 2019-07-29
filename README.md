[![Build Status](https://travis-ci.org/atheodosiou/autocomplete-demo.svg?branch=master)](https://travis-ci.org/atheodosiou/autocomplete-demo)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

# ng-gplace-autocomplete

This is a demo project for ng-gplace-autocomplete angular component.

![ng-autocomplete-demo](https://user-images.githubusercontent.com/20326000/61945857-ac814e80-afa9-11e9-82c8-74ce357af518.gif)

## Integration
The first thing we have to do, is to install the ng-gplace-autocomlete in our project via npm.
```sh
npm i ng-gplace-autocomplete
```
Then, once the component has been successfully downloaded, we need to update our project with the types of google maps. This is done through the command bellow via npm again.
```sh
npm i @types/googlemaps
```

After that, we need to update our projects index.html with the Google Maps JavaScript API. To link this page with the api, we must add the script bellow in our index.html inside the head tag.
```html
<script src="https://maps.googleapis.com/maps/api/js?key=<Your API KEY>&libraries=places&language=en"></script>
```
Replace with google places <Your API KEY>. Ref - [Google Maps API](https://developers.google.com/places/web-service/get-api-key)

At this point, the component installation is complete. On the nex section, we will go through the component instalation.

## Usage

1. Add the NgAutocompleteModule into your application module ( e.g. app.module.ts )
```typescript
import { NgAutocompleteModule } from 'ng-gplace-autocomplete';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Add the ng-autocomplete component to your app.component.html like bellow
```html
 <ng-autocomplete [adressType]="geocode" (onAddressChange)="onAddressChange($event)"></ng-autocomplete>
```
3. Set addressType property according to your preference:

    a. For Residential Address Use: "geocode"
  
    b. For Office Address Use: "establishment"

4. Attach a function to the (onAddressChange) event like above and add this function to you app.component.ts file.
```typescript
onAddressChange(event:any){
    //Do some staff
    console.log(event);
  }
```
After that, on every address selection, we should get a json object about the selected address like the following:

```json
{address_components: Array(3), adr_address: "<span class="locality">Θεσσαλονίκη</span>, <span class="country-name">Ελλάδα</span>", formatted_address: "Θεσσαλονίκη, Ελλάδα", geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png", …}
address_components: (3) [{…}, {…}, {…}]
adr_address: "<span class="locality">Θεσσαλονίκη</span>, <span class="country-name">Ελλάδα</span>"
formatted_address: "Θεσσαλονίκη, Ελλάδα"
geometry: {location: _.R, viewport: _.Gd}
html_attributions: []
icon: "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png"
id: "e7e3f33823c95f045938299e92342f40e1c1f1cd"
name: "Θεσσαλονίκη"
photos: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
place_id: "ChIJ7eAoFPQ4qBQRqXTVuBXnugk"
reference: "ChIJ7eAoFPQ4qBQRqXTVuBXnugk"
scope: "GOOGLE"
types: (2) ["locality", "political"]
url: "https://maps.google.com/?q=%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%AF%CE%BA%CE%B7,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1&ftid=0x14a838f41428e0ed:0x9bae715b8d574a9"
utc_offset: (...)
utc_offset_minutes: 180
vicinity: "Θεσσαλονίκη"
get utc_offset: ƒ ()
set utc_offset: ƒ (b)
__proto__: Object
```

## Styling
You can easily style the ng-autocomplete component by adding your styles as an object to the style property like below:
```html
 <ng-autocomplete [adressType]="establishment" [style]="{'width':'400px','font-size':'1.1em'}" (onAddressChange)="onAddressChange($event)"></ng-autocomplete>
```
# GitHub

Please feel free to declare issues or contribute: [ng-autocomplete repo](https://github.com/atheodosiou/autocomplete-demo)

## Keywords

autocomplete typescript google places angular 8 angular 7 angular 6 angular 5 angular 4 angular 2
