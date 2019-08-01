import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-google-place-autocomplete';
  addressType:'address';
  country=['gr'];

  lat: number = 40.6400629;
  lng: number = 22.944419100000005;
  zoom:number = 13;
  setAddress(event){
    console.log(event);
    this.lat = event.location.lat;
    this.lng = event.location.lng;
    this.zoom = 17;
  }
}
