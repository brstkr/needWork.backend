import IAuthRepository from "../domain/IAuthRepository";
import IPasswordService from "../services/IPasswordService";

export default class SignInUseCase {
    /**
     * AuthRepository and PasswordService registration
     */
    constructor(private authRepository: IAuthRepository, private passwordService: IPasswordService) {
        
    }

    public async execute(email: string, password: string) : Promise<string> {
        //Find existing user from db with the repo helper method
        const user = await this.authRepository.find(email)

        //External authentication case (Google Authentication ..)
        if(password == '' && user) return user.id

        //Comparing passed in password with the user specific password
        if(!(await this.passwordService.compare(password, user.password))){
            //Throw rejection with the following message
            return Promise.reject('Invalid email or password')
        }

        return user.id
    }
}