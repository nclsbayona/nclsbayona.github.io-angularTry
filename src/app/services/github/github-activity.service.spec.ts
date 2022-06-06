import { TestBed } from '@angular/core/testing';

import { GithubActivityService } from './github-activity.service';

describe('GithubActivityService', () => {
  let service: GithubActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
