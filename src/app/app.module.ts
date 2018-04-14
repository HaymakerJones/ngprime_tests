import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SideBarDemoModule } from './sidebar-demo/sidebar-demo.module';
import { DatatableModule } from './datatable-demo/datatable.module';
import { DataGridComponent } from './data-grid/data-grid.component';



@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SideBarDemoModule,
    DatatableModule,
    AppRoutingModule
  ],
  providers: [
    SideBarDemoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
