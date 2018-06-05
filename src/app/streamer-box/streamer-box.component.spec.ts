import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerBoxComponent } from './streamer-box.component';

describe('StreamerBoxComponent', () => {
  let component: StreamerBoxComponent;
  let fixture: ComponentFixture<StreamerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
