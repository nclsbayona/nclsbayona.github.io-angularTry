import { FileSaverService } from 'ngx-filesaver';
import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../services/download/download.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  pdf: string = "https://nclsbayona.github.io/MyResume/generated/resume.pdf"
  md: string = "https://nclsbayona.github.io/MyResume/markdown/resume.md"
  docx: string = "https://nclsbayona.github.io/MyResume/generated/resume.docx"
  html: string = "https://nclsbayona.github.io/MyResume/generated/resume.html"
  tex: string = "https://nclsbayona.github.io/MyResume/generated/resume.tex"

  constructor(private downloads: DownloadService, private fileSaverService: FileSaverService) { }

  ngOnInit(): void {
  }

  scrollToTop() {
    document.querySelector('ion-content')?.scrollToTop(500)
  }

  downloadPDF() {
    try {
      this.downloads.download(this.pdf).subscribe(blob => {
        this.fileSaverService.save(blob, "resume.pdf");
      });
    } catch (e) {
      alert('Saving failed :C');
    }
  }

  downloadMD() {
    try {
      this.downloads.download(this.md).subscribe(blob => {
        this.fileSaverService.save(blob, "resume.md");
      });
    } catch (e) {
      alert('Saving failed :C');
    }
  }

  downloadHTML() {
    try {
      this.downloads.download(this.html).subscribe(blob => {
        this.fileSaverService.save(blob, "resume.html");
      });
    } catch (e) {
      alert('Saving failed :C');
    }
  }

  downloadTEX() {
    try {
      this.downloads.download(this.tex).subscribe(blob => {
        this.fileSaverService.save(blob, "resume.tex");
      });
    } catch (e) {
      alert('Saving failed :C');
    }
  }

  downloadDOCX() {
    try {
      this.downloads.download(this.docx).subscribe(blob => {
        this.fileSaverService.save(blob, "resume.docx");
      });
    } catch (e) {
      alert('Saving failed :C');
    }
  }
}
