import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {ErrorComponent} from "./error/error.component";
import {WelcomeComponent} from './welcome/welcome.component';


const ROUTES: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }