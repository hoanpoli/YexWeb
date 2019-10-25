import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DictionaryComponent } from './dictionary.component';

const routes: Routes = [
    { path: '', component: DictionaryComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [DictionaryComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})

export class DictionaryModule { }