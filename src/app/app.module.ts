


import { HighlightDirectiveMouseOver } from './_directives/highlight-mouse-over.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend


import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';




import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HighlightDirective } from './_directives/highlight.directive';
import { ExponentialStrengthPipe } from './_directives/_pips/exponential-strength-pipe';
import { NgbdAlertCloseableModule } from './_widgets/alert-closeable/alert-closeable.module';

import { LoginComponent } from './login/login-index';
import { UserList } from './user/user-components/user-list/user-list.component';
import { MessagesComponent } from './examples/examples-components/messages/messages-components/rx-js.messages.component';
import { DecorationComponent } from './examples/examples-components/decoration/decoration-components/decoarion-main/decoration.componenet';
import { DecorationSubComponent } from './examples/examples-components/decoration/decoration-components/decoration-sub/decoration-sub.component';
import { BasicAuthInterceptor } from './_interceptors/basic-auth.interceptor';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { UserResolverService } from './user/user-services/user-resolver.service';
import { TemplateFormComponent } from './examples/examples-components/template-form/template-form.component';
import { UserRegiatraionForm } from './user/user-components/user-registraion-form/user-registraion-form.component';






@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        NgbModule,
        NgbdAlertCloseableModule


    ],
    declarations: [
        AppComponent,
        UserList,
        LoginComponent,
        MessagesComponent,
        HighlightDirective,
        HighlightDirectiveMouseOver,
        ExponentialStrengthPipe,
        DecorationComponent,
        DecorationSubComponent,

        UserRegiatraionForm

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


        // provider used to create fake backend
        UserResolverService


    ],
    bootstrap: [AppComponent]
})
export class AppModule { }