import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private captchaResolved: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getResolved() { return this.captchaResolved }
  checkCaptcha(captchaResponse: string) { this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false }
}
