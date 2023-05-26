import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterFeedComponent } from './twitter-feed.component';

describe('TwitterFeedComponent', () => {
  let component: TwitterFeedComponent;
  let fixture: ComponentFixture<TwitterFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterFeedComponent]
    });
    fixture = TestBed.createComponent(TwitterFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
