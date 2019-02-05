import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private authRequest = environment.authRequest;
  constructor(
    private http: HttpClient
  ) { }

  search(data): Observable<any> {
    let searchRequest = this.authRequest('search').trim();
    let filters = this.checkForFilters(data);
    searchRequest =  `${searchRequest}&q=${data.keyword}&maxResults=${data.max}${filters}`;
    return this.http.get(searchRequest);
  }

  checkForFilters(data) {
    let filters = '';
    if (data.type) filters += '&type=' + data.type;
    if (data.publishedAfter) filters += '&publishedAfter=' + (new Date(data.publishedAfter)).toISOString();
    return filters;
  }
}
