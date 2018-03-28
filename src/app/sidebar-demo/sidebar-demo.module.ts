import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChildFormatterComponent } from './child-formatter/child-formatter.component';


@NgModule({
    imports: [
        CommonModule,
        SidebarModule,
        ButtonModule,
        CardModule
    ],
    exports: [
        SidebarDemoComponent
    ],
    declarations: [
        SidebarDemoComponent,
        ChildFormatterComponent
    ],
    providers: [],
})
export class SideBarDemoModule { }
