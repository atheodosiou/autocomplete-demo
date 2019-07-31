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

  setAddress(event){
    console.log(event);
  }
}
