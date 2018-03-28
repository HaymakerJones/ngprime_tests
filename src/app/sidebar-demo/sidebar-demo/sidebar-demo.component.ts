import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-demo',
  templateUrl: './sidebar-demo.component.html',
  styleUrls: ['./sidebar-demo.component.css']
})
export class SidebarDemoComponent implements OnInit {

  displaySideBar = false;
  contentFlag = 1;

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.displaySideBar = !this.displaySideBar;
  }

  contentSelector(id: number) {
    this.contentFlag = id;
    this.displaySideBar = false;
  }

}
