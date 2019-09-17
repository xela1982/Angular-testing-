import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { MustMatchDirective } from './directives/must-match.directive';
import { NgbdAlertCloseableModule } from './widgets/alert-closeable/alert-closeable.module';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    MustMatchDirective

  ],
  imports: [
    BrowserModule,
    NgbdAlertCloseableModule,
    RouterModule.forRoot(
      [
        { path: "form/template", component: TemplateFormComponent },
        { path: "form/reactive", component: ReactiveFormComponent }

      ]
    ),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
