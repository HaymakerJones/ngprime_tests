import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SideBarDemoModule } from './sidebar-demo/sidebar-demo.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SideBarDemoModule,
    AppRoutingModule
  ],
  providers: [
    SideBarDemoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
