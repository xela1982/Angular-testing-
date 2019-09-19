
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


import { User } from '../user-models/user';
import { UserDataService } from './user-data.service';

@Injectable({ providedIn: 'root' })
export class UserHttpService {
    ApiUrl: string = 'http://localhost:51849/api/User';
    constructor(private http: HttpClient, private userDataService: UserDataService) { }
    fetchUsers() {
        return this.http.get<User[]>(this.ApiUrl)
            .pipe(
                tap(users => {
                    this.userDataService.setUsers(users);
                })
            );
    }
    storeUsers(user: User) {
        return this.http.post(this.ApiUrl, user);
    }
    updateUser(user: User) {
        return this.http.post(this.ApiUrl, user);
    }
    deleteUser(userId: number) {
        return this.http.delete(this.ApiUrl + '/' + userId);
    }

}


