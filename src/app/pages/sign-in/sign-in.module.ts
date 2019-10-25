import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in.component';

const routes: Routes = [
    { path: '', component: SignInComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [SignInComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class SignInModule { }