
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gdp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = new FormControl('');
  // @Output('search') searchEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    // this.search.valueChanges.subscribe((value) => this.searchEmitter.emit(value))
    
  }
  
}
