import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchActive = false;
  showFilters = false;
  keyword = '';
  @Output('keywordValue') keywordValue: EventEmitter<any> = new EventEmitter();
  @Output('emitType') emitType: EventEmitter<any> = new EventEmitter();
  @Output('emitUploadTime') emitUploadTime: EventEmitter<any> = new EventEmitter();
  searchInput;
  @ViewChild('searchInput') set content(content: ElementRef) {
    if (!content) return;
    this.searchInput = content;
    this.searchInput.nativeElement.focus();
  }
  constructor() { }

  ngOnInit() {
  }

  search() {
    if (!this.keyword) return;
    this.searchActive = false;
    this.keywordValue.emit(this.keyword);
    this.showFilters = true;
  }

  getSearchType(type) {
    this.emitType.emit(type);
  }
  getUploadTime(uploadTime) {
    this.emitUploadTime.emit(uploadTime);
  }

}
