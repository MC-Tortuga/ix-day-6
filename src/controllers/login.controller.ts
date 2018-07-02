import { Request, RestBindings, HttpErrors, get, param } from '@loopback/rest';
import { inject } from '@loopback/context';
import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user';
// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';



export class LoginController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) { }

  // Map to `GET /ping`
  @get('/login')

  async login(@param.query.string('email') email: string, @param.query.string('password') password: string): Promise<User[]> {

    return await this.userRepo.find();
  }
}

