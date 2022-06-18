import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Ievent } from '../interfaces/Ievent';
import { TimelineService } from '../services/timeline/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {

  @Input() items: Ievent[] = []
  constructor(private cd: ChangeDetectorRef, private timelineService: TimelineService) {
  }

  ngOnInit(): void {
    this.timelineService.getTimeline().subscribe(data => {
      console.log(data)
      data.forEach(element => {
        this.items.push(element)
        this.cd.markForCheck();
      })
    })
  }
}
