import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nclsbayona.github.io';
  clickedStar(){
    console.log(1)
  }
  clickedSearch(){
    console.log(2)
  }
}
