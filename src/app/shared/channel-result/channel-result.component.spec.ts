import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelResultComponent } from './channel-result.component';

describe('ChannelResultComponent', () => {
  let component: ChannelResultComponent;
  let fixture: ComponentFixture<ChannelResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
