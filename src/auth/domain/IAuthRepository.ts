import User from "./User";

export default interface IAuthRepository {
    //Method for finding user from db
    find(email: string): Promise<User>

    //Method for adding new users to db and returning the id of the user
    add(name: string, email: string, passwordHash: string, type: string): Promise<string>
}