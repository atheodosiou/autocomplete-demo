import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgAutocompleteModule } from 'ng-gplace-autocomplete';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoEehJiv0FgRfpTCf5C0XVLdPSNmnVOvI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
