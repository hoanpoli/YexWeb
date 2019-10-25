import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
    { path: '', component: SignUpComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [SignUpComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class SignUpModule { }