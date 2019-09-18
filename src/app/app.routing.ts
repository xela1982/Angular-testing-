import { WidgetsComponent } from './widgets/widgets.component';
import { MessagesComponent } from './messages/rx-js.messages.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { DecorationComponent } from './decoration/decoration.componenet';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'form/reactive', component: ReactiveFormComponent, canActivate: [AuthGuard] },
    { path: 'form/template', component: TemplateFormComponent, canActivate: [AuthGuard] },
    { path: 'decoration', component: DecorationComponent, canActivate: [AuthGuard] },
    { path: 'widgets', component: WidgetsComponent, canActivate: [AuthGuard] },

    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);