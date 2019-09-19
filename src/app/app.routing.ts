


import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_guards/auth.guard';


import { LoginComponent } from './login/login-index';
import { UserList } from './user/user-components/user-list/user-list.component';
import { UserResolverService } from './user/user-services/user-resolver.service';
import { MessagesComponent } from './examples/examples-components/messages/messages-components/rx-js.messages.component';
import { TemplateFormComponent } from './examples/examples-components/template-form/template-form.component';
import { DecorationComponent } from './examples/examples-components/decoration/decoration-components/decoarion-main/decoration.componenet';
import { UserRegiatraionForm } from './user/user-components/user-registraion-form/user-registraion-form.component';


const routes: Routes = [
    { path: '', component: UserList, canActivate: [AuthGuard], resolve: [UserResolverService] },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'form/reactive', component: UserRegiatraionForm, canActivate: [AuthGuard], resolve: [UserResolverService] },
    { path: 'form/reactive/:id', component: UserRegiatraionForm, canActivate: [AuthGuard], resolve: [UserResolverService] },

    { path: 'decoration', component: DecorationComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);