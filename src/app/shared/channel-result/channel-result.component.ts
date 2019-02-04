import { Component, Input, } from '@angular/core';

@Component({
  selector: 'channel-result',
  templateUrl: './channel-result.component.html',
  styleUrls: ['./channel-result.component.scss']
})
export class ChannelResultComponent {
  @Input('channel') channel: object;
  constructor() { }

}
