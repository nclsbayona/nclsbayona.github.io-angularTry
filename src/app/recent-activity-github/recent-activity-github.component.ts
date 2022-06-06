import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Igithubaevent } from '../interfaces/Igithubaevent';
import { GithubActivityService } from '../services/github/github-activity.service';

@Component({
  selector: 'app-recent-activity-github',
  templateUrl: './recent-activity-github.component.html',
  styleUrls: ['./recent-activity-github.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentActivityGithubComponent implements OnInit {

  @Input() items: Igithubaevent[] = []

  ngOnInit(): void {
    this.githubService.getActivity().subscribe(data => {
      data.forEach((element: Igithubaevent) => {
        this.items.push(element)
        this.cd.markForCheck();
      })
    })
  }

  constructor(private cd: ChangeDetectorRef, private githubService: GithubActivityService) { }

}
