import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css']
})
export class RecentActivityComponent implements OnInit {

  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
  items: number[];

  ngOnInit(): void {
  }


  loadData(event: any) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      event.target.complete();
    }, 400);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
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
