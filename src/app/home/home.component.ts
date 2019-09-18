import { Component } from '@angular/core';

import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[] = [];
    constructor(private userService: UserService) { }
    ngOnInit() {
        this.userService.usersChange.subscribe(
            (users) => {
                if (users.length > 0) {
                    this.loading = false;
                    this.users = users;
                }
            }
        )
        this.onGetUsers();
    }
    onGetUsers() {
        this.userService.getAll();
    }
    onAddUser() {
        let user = new User(2, 'test', 'test', 'test', 'test');
        this.userService.addUser(user);
    }
    onDeleteUser(userId: number) {
        this.userService.deleteUser(userId);
    }
    onUpdateUser(userId: number) {
        let user = new User(2, 'abcd', 'abcd', 'abcd', 'abcd');
        this.userService.updateUser(user);
    }
}