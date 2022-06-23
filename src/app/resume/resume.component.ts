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

  scrollToTop() {
    document.querySelector('ion-content')?.scrollToTop(500)
  }

  downloadPDF() {
    alert("File in generated/resume.pdf")
  }

  downloadMD() {
    alert("File in markdown/resume.md")
  }

  downloadHTML() {
    alert("File in generated/resume.html")
  }

  downloadTEX() {
    alert("File in generated/resume.tex")
  }

  downloadDOCX() {
    alert("File in generated/resume.docx")
  }
}
