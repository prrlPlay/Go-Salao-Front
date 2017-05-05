import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';

const sharedRoutes: Routes = [
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(sharedRoutes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }