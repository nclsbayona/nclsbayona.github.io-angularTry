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
  constructor(private controller: MenuController) {}

  ngOnInit(): void {
  }

  async openMenu(){
    await this.controller.open();
  }

}
