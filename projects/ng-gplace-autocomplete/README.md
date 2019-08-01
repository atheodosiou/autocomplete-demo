[![Build Status](https://travis-ci.org/atheodosiou/autocomplete-demo.svg?branch=master)](https://travis-ci.org/atheodosiou/autocomplete-demo)
![npm](https://img.shields.io/npm/dt/ng-gplace-autocomplete?color=blue)
![npm](https://img.shields.io/npm/v/ng-gplace-autocomplete)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

# ng-gplace-autocomplete

This is a demo project for ng-gplace-autocomplete angular component.

![ng autocomplete demo](https://user-images.githubusercontent.com/20326000/62285900-3ffdc800-b45f-11e9-8ec9-b999b290677d.gif)

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
 <ng-autocomplete [addressType]="type" [country]="countryRestrictions" (onAddressChange)="onAddressChange($event)"></ng-autocomplete>
```
3. Create two consts in your app.component.ts for addresType and country parameters
```javascript
  type:'address';  //This value could be address | geocode | establishment
  countryRestrictions=['gr']; //If not set, default is ['us']
  ```
4. Attach a function to the (onAddressChange) event like above and add this function to you app.component.ts file.
```typescript
onAddressChange(event:any){
    //Do some staff
    console.log(event);
  }
```
After that, on every address selection, we should get a json object about the selected address like the following:

![Screenshot from 2019-08-01 02-23-40](https://user-images.githubusercontent.com/20326000/62254914-ac4ade00-b403-11e9-9215-ca14b4142343.png)

## Styling
You can easily style the ng-autocomplete component by adding your styles as an object to the style property like below:
```html
 <ng-autocomplete [addressType]="type" [country]="countryRestrictions" [style]="{'width':'400px','font-size':'1.1em'}" (onAddressChange)="onAddressChange($event)"></ng-autocomplete>
```
# GitHub

Please feel free to declare issues or contribute: [ng-autocomplete repo](https://github.com/atheodosiou/autocomplete-demo)

## Keywords

autocomplete typescript google places angular 8 angular 7 angular 6 angular 5 angular 4 angular 2
