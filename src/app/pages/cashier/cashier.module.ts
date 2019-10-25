import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CashierComponent } from './cashier.component';

const routes: Routes = [
    { path: '', component: CashierComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [CashierComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class CashierModule { }