import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityTwitterComponent } from './recent-activity-twitter.component';

describe('RecentActivityTwitterComponent', () => {
  let component: RecentActivityTwitterComponent;
  let fixture: ComponentFixture<RecentActivityTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentActivityTwitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentActivityTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
