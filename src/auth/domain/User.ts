export default class User {
    /**
     * Constructor for the User with the attributes passing id,name,email and password
     */
    constructor(public readonly id: string,public readonly name: string, public readonly email: string, public readonly password: string, public readonly type: string) {
        
    }
}