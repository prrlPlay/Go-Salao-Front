import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared.routing.module';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
    imports: [
        SharedRoutingModule
    ],
    declarations: [
        FormErrorComponent
    ],
    exports: [

    ]
})
export class SharedModule {

}