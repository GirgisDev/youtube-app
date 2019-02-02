import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchActive = false;
  keyword = '';
  @Output('keywordValue') keywordValue: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  search() {
    if (!this.keyword) return;
    console.log(this.keyword);
    this.searchActive = false;
    this.keywordValue.emit(this.keyword);
  }

}
