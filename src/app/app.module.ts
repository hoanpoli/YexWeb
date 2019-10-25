import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';

import {
    ApiProvider,
    SetupProvider
} from './providers';

const routes: Routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        ApiProvider,
        SetupProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }