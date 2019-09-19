

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserHttpService } from './user-http.service';
import { UserDataService } from './user-data.service';
import { User } from '../user-models/user';



@Injectable({ providedIn: 'root' })
export class UserResolverService implements Resolve<User[]> {
    constructor(private userHttpService: UserHttpService, private userService: UserDataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //unmark only if one person working the system
        //const users = this.userService.getUsers();
        // if (users.length == 0) {
        return this.userHttpService.fetchUsers();
        //  }
        //  return users;

    }
}
