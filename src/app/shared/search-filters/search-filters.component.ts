import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  searchTypes = [
    { name: 'All', value: '' },
    { name: 'Video', value: 'video' },
    { name: 'Channel', value: 'channel' },
    { name: 'Playlist', value: 'playlist' },
  ];
  uploadDates: any[];
  currentUploadDate = '';
  currentType = '';
  @Output('emitType') emitType: EventEmitter<any> = new EventEmitter();
  @Output('emitUploadTime') emitUploadTime: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    let d = new Date();
    const filterDates = {
      yesterDay: new Date(d.setDate(d.getDate() - 1)),
      lastWeek: new Date(d.setDate(d.getDate() - 7)),
      lastMonth: new Date(d.setDate(d.getDate() - 30))
    };

    this.uploadDates = [
      { name: 'Any time', value: '' }, // upload date today, this week this month
      { name: 'Today', value: filterDates.yesterDay },
      { name: 'This week', value: filterDates.lastWeek },
      { name: 'This month', value: filterDates.lastMonth }
    ];
  }

  setType() {
    this.emitType.emit(this.currentType);
  }
  setUploadTime() {
    this.emitUploadTime.emit(this.currentUploadDate);
  }

}
