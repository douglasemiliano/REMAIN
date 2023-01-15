export class User {
    constructor(private id: number,
                private uid: string,
                private firstName: string,
                private lastName: string,
                private email: string,
                private isEmailVerified: boolean,
                private birthDate: string,
                private photoUrl: string) {
    }
}