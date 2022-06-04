import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  title!: string;

  isPopoverOpen: boolean;

  constructor(private controller: MenuController) {
    this.isPopoverOpen = false;
  }

  ngOnInit(): void {
  }

  async openMenu(){
    await this.controller.open();
  }

}
