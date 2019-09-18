import { last } from 'rxjs/operators';

export class User {
    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public authdata?: string;
    constructor(id: number,
        username: string,
        password: string,
        firstName: string,
        lastName: string,
        authdata?: string, ) {

        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;


    }
}