import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { BehaviorSubject } from 'rxjs';

/*  // subscribe to only one todo 
 this.singleTodo$ = this.todoService.todos.pipe(
    map(todos => todos.find(item => item.id === '1'))
  );  */

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private _usersChange = new BehaviorSubject<User[]>([]);
    readonly usersChange = this._usersChange.asObservable();
    private dataStore: { users: User[] } = { users: [] };



    getAll() {
        this.http.get<User[]>(`${environment.apiUrl}/users`).subscribe(data => {
            this.dataStore.users = data;
            this._usersChange.next(Object.assign({}, this.dataStore).users);
        }, error => console.log('error'));
    }
    getUser(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/user?id=${id}`).subscribe(data => {
            this.dataStore.users = [];
            this.dataStore.users.push(data);
            this._usersChange.next(Object.assign({}, this.dataStore).users);
        }, error => console.log('error'));;
    }
    addUser(user2: User) {
        this.http.post<User>(`${environment.apiUrl}/user`, JSON.stringify(user2)).subscribe(user => {
            console.log(user2);

            this.dataStore.users.push(user2);
            console.log(this.dataStore.users);

            this._usersChange.next(Object.assign({}, this.dataStore).users);
        }, error => console.log('error'));
    }
    updateUser(user: User) {
        this.http.put<User>(`${environment.apiUrl}/user/${user.id}`, JSON.stringify(user)).subscribe(data => {
            this.dataStore.users.forEach((t, i) => {
                if (t.id === data.id) { this.dataStore.users[i] = data; }
            });

            this._usersChange.next(Object.assign({}, this.dataStore).users);
        }, error => console.log('error'));
    }
    deleteUser(userId: number) {
        this.http.delete(`${environment.apiUrl}/user/${userId}`).subscribe(response => {
            this.dataStore.users.forEach((t, i) => {
                if (t.id === userId) { this.dataStore.users.splice(i, 1); }
            });

            this._usersChange.next(Object.assign({}, this.dataStore).users);
        }, error => console.log('error'));
    }
}