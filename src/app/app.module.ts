import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SideBarDemoModule } from './sidebar-demo/sidebar-demo.module';
import { DatatableModule } from './datatable-demo/datatable.module';
import { DataGridComponent } from './data-grid/data-grid.component';
import { TabviewComponent } from './tabview/tabview.component';
import { TabViewModule } from 'primeng/tabview';



@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    TabviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SideBarDemoModule,
    DatatableModule,
    TabViewModule,
    AppRoutingModule
  ],
  providers: [
    SideBarDemoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
