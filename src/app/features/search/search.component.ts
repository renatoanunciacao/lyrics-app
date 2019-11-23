import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchWordEvent = new EventEmitter();
 
  handleSearch(e) {
    this.searchWordEvent.emit(e.target.value);
  }

}
