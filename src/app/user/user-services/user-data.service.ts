
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { User } from '../user-models/user';



@Injectable({ providedIn: 'root' })
export class UserDataService {
    constructor() { }
    private _usersChange = new BehaviorSubject<User[]>([]);
    readonly usersChange = this._usersChange.asObservable();
    private users: User[] = [];

    getUser(userId: number) {

        const index = this.users.findIndex((e) => e.id === userId);
        return this.users[index];
    }
    updateUser(userId: number, user: User) {
        const index = this.users.findIndex((e) => e.id === userId);
        this.users[index].firstName = user.firstName;
        this._usersChange.next(this.users.slice());
    }
    addUser(user: User) {
        this.users.push(user);
        this._usersChange.next(this.users.slice());

    }
    deleteUser(userId: number) {
        const index = this.users.findIndex((e) => e.id === userId);
        this.users.splice(index, 1);
        this._usersChange.next(this.users.slice());
    }
    getUsers() {
        return this.users.slice();
    }
    setUsers(users: User[]) {
        this.users = users;
        this._usersChange.next(this.users.slice());
    }
}