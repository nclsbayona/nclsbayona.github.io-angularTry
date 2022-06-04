import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-recent-activity-github',
  templateUrl: './recent-activity-github.component.html',
  styleUrls: ['./recent-activity-github.component.css']
})
export class RecentActivityGithubComponent implements OnInit {
  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
  items: number[];
  disabled: boolean=false

  ngOnInit(): void {
  }


  loadData(event: any) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      event.target.complete();
    }, 400);
  }

  constructor() {
    this.items=[];
    this.addMoreItems();
  }

  addMoreItems() {
    for (let i = 1; i < 50; i++) {
      this.items.push(i);
    }
  }
}
