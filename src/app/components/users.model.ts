export class Users {
    userId: number;
    username: string;
    password: string;

    constructor(userId: number, username: string, password: string) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
}
