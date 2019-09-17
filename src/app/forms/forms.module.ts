
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MustMatchDirective } from '@app/_directives/must-match.directive';


@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        TemplateFormComponent,
        ReactiveFormComponent
    ],
    declarations: [
        TemplateFormComponent,
        ReactiveFormComponent,
        MustMatchDirective

    ],
    providers: [

    ]
})
export class FormsRegistrationModule { }