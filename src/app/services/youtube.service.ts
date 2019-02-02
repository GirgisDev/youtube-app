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

  search(keyword): Observable<any> {
    return this.http.get(this.authRequest('search') + '&q=' + keyword);
  }
}
