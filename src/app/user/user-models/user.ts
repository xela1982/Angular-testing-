export class User {
    constructor(
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public title: string,
        public acceptTerms: boolean,
        public id?: number,
        public authdata?: string


    ) { }
}