/**
 * Test file for SignInUseCase
 * Test Frameworks: Mocha, Chai
 */

import 'mocha'
import chai, { expect } from 'chai'
import IAuthRepository from '../../../src/auth/domain/IAuthRepository'
import IPasswordService from '../../../src/auth/services/IPasswordService'
import SignInUseCase from '../../../src/auth/usecases/SignInUseCase'
import FakeRepository from '../helpers/FakeRepository'
import FakePasswordService from '../helpers/FakePasswordService'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)

describe('SingInUseCase', () => {
    let sut: SignInUseCase
    let repository: IAuthRepository
    let passwordService: IPasswordService

    const user = {
        email: 'baris@needWork.com',
        id: '123',
        name: 'Baris',
        password: '$2b$10$K0HEqyYUlQLaj.Xkp9tDzuRclzJqdKCYV7gEHtSVIlu8NRtLM6flC',
        type: 'email',
    }

    beforeEach(() => {
        repository = new FakeRepository()
        passwordService = new FakePasswordService()
        sut = new SignInUseCase(repository, passwordService)
    })

    it('should throw error when user is not found', async () => {
        const user = {email: 'wrong@email.com', password: '123'}

        //assert
        await expect(sut.execute(user.email, user.password)).to.be.rejectedWith('User not found')
    })
})