import { Component, Input } from '@angular/core';

@Component({
  selector: 'video-result',
  templateUrl: './video-result.component.html',
  styleUrls: ['./video-result.component.scss']
})
export class VideoResultComponent {
  @Input('video') video: object;

  constructor() { }

}
