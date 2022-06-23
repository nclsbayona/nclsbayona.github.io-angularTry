import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { RecentActivityGithubComponent } from './recent-activity-github/recent-activity-github.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { RecentActivityTwitterComponent } from './recent-activity-twitter/recent-activity-twitter.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FileSaverModule } from 'ngx-filesaver';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecentActivityComponent,
    RecentActivityGithubComponent,
    HomeComponent,
    PageNotFoundComponent,
    TimelineComponent,
    ContactComponent,
    RecentActivityTwitterComponent,
    ResumeComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule, 
    RecaptchaFormsModule, 
    RecaptchaModule,
    PdfViewerModule,
    FileSaverModule,
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
