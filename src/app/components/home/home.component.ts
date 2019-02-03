import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  @Input('searchKeyword') searchKeyword: string;
  loading = false;
  results: any[];
  err: string;
  pageNum = 1;
  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.searchKeyword) {
      if (changes.searchKeyword.currentValue) this.search()
    }
  }

  search() {
    this.loading = true;
    let params = {
      keyword: this.searchKeyword,
      max: this.pageNum * 5
    }
    this.youtubeService.search(params).subscribe(res => {
      this.setResults(res.items);
      this.loading = false;
    }, err => {
      this.err = err;
      this.loading = false;
    })
  }

  setResults(arr) {
    this.results = [
      ...this.results || [],
      ...arr.slice(Math.max(arr.length - 5, 0))
    ];
  }

  loadMore() {
    this.pageNum += 1;
    this.search();
  }

}
