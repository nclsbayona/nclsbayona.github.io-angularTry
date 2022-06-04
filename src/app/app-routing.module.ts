import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentActivityGithubComponent } from './recent-activity-github/recent-activity-github.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';

const routes: Routes = [
  {
    path:"activity", component: RecentActivityComponent
  },
  {
    path:"activity/github", component: RecentActivityGithubComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
