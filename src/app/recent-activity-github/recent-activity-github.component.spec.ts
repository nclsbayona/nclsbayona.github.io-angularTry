import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityGithubComponent } from './recent-activity-github.component';

describe('RecentActivityGithubComponent', () => {
  let component: RecentActivityGithubComponent;
  let fixture: ComponentFixture<RecentActivityGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentActivityGithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentActivityGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
