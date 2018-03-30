import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DatatableComponent } from './datatable/datatable.component';
import { DATATABLE_PROVIDER } from './datatable.service';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        TableModule
    ],
    exports: [
        DatatableComponent
    ],
    declarations: [
        DatatableComponent
    ],
    providers: [
        DATATABLE_PROVIDER
    ],
})
export class DatatableModule { }
