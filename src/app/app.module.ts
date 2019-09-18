import { HighlightDirectiveMouseOver } from './_directives/highlight-mouse-over.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { MessagesComponent } from './messages/rx-js.messages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsRegistrationModule } from './forms/forms.module';
import { HighlightDirective } from './_directives/highlight.directive';
import { ExponentialStrengthPipe } from './_pips/exponential-strength-pipe';
import { DecorationComponent } from './decoration/decoration.componenet';;
import { DecorationSubComponent } from './decoration/decoration-sub/decoration-sub.component'
    ;
import { WidgetsComponent } from './widgets/widgets.component'
import { NgbdAlertCloseableModule } from './_widgets/alert-closeable/alert-closeable.module';





@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsRegistrationModule,
        appRoutingModule,
        NgbModule,
        NgbdAlertCloseableModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        MessagesComponent,
        HighlightDirective,
        HighlightDirectiveMouseOver,
        ExponentialStrengthPipe,
        DecorationComponent,
        DecorationSubComponent,
        WidgetsComponent

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


        // provider used to create fake backend
        fakeBackendProvider

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }