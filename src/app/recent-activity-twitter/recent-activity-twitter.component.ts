import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-activity-twitter',
  templateUrl: './recent-activity-twitter.component.html',
  styleUrls: ['./recent-activity-twitter.component.css']
})
export class RecentActivityTwitterComponent implements OnInit {

  options = {
    tweetLimit: 10,
    color: '#FFFFFF',
    theme: 'dark'
  }

  data={
    sourceType: 'profile',
    url: 'https://twitter.com/nclsbayona',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
