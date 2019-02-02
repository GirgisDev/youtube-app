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
    this.youtubeService.search(this.searchKeyword).subscribe(res => {
      this.results = res.items;
      this.loading = false;
    }, err => {
      this.err = err;
      this.loading = false;
    })
  }

}
