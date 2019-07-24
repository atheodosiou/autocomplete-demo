import { NgModule } from '@angular/core';
import { NgAutocompleteComponent } from './ng-gplace-autocomplete.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [NgAutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgAutocompleteComponent]
})
export class NgAutocompleteModule { }
