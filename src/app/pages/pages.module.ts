import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: '', redirectTo: 'dictionary', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule' },
            { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInModule' },
            { path: 'cashier', loadChildren: './cashier/cashier.module#CashierModule' },
            { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
            { path: 'dictionary', loadChildren: './dictionary/dictionary.module#DictionaryModule' },
            { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfileModule' }
        ]
    }
];

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class PagesModule { }