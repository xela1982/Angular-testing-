import { Component } from '@angular/core';
import { UserDataService } from '@app/user/user-services/user-data.service';
import { User } from '@app/user/user-models/user';
import { UserHttpService } from '@app/user/user-services/user-http.service';
@Component({ templateUrl: 'user-list.component.html' })
export class UserList {
    loading = false;
    users: User[] = [];
    constructor(private userDataService: UserDataService, private userHttpService: UserHttpService) { }
    ngOnInit() {
        this.userDataService.usersChange.subscribe(
            (users) => {
                this.loading = false;
                this.users = users;
            }
        )
        this.users = this.userDataService.getUsers();
    }
    onDelete(userId: number) {
        this.userHttpService.deleteUser(userId).subscribe(
            () => { this.userDataService.deleteUser(userId) }
        )
    }
}