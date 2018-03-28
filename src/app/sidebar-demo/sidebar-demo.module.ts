import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SidebarDemoComponent
    ],
    declarations: [
        SidebarDemoComponent
    ],
    providers: [],
})
export class SideBarDemoModule { }
