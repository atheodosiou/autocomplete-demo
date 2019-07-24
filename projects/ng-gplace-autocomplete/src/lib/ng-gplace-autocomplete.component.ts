import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-autocomplete',
  templateUrl:'./ng-gplace-autocomplete.component.html',
  styleUrls:['./ng-gplace-autocomplete.component.scss']
})
export class NgAutocompleteComponent implements OnInit {

  constructor() { }
  @Input() style:any;
  @Input() placeholder:string = 'Search an address'
  ngOnInit() {
    console.log(this.style) 
  }

}
