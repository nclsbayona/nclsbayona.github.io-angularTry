import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() { document.querySelector('ion-content')?.scrollToTop(500) }
  
  downloadPDF(){}
  downloadMD(){}
}
