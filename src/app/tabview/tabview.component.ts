import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TabPanel } from 'primeng/tabview';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css']
})
export class TabviewComponent implements OnInit, AfterViewInit {

  people = [
    { name: 'Justin', age: 26 },
    { name: 'kristen', age: 29 },
    { name: 'Dwight', age: 38 },
    { name: '(+) Add new person', age: null },
  ];

  @ViewChildren(TabPanel) panels: QueryList<TabPanel>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.panels.changes.subscribe(
      data => {
        console.log(data);
        return data._results[data._results.length - 2].header = "test";
      }
    );
  }

  addNewPerson(event: any) {
    console.log(event.index);
    if (event.index === this.people.length - 1) {
      this.people.splice(event.index, 0, { name: 'New', age: null });
      event.index = this.people.length - 2;
    }
  }

}
