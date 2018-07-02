import { Request, RestBindings, post, requestBody } from '@loopback/rest';

import { inject } from '@loopback/context';
import { User } from '../models/user';
import { UserRepository } from '../repositories/user.repository';
import { repository } from '@loopback/repository';
// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';



export class RegistrationController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) { }

  // Map to `GET /ping`
  @post('/register')
  async registerUser(@requestBody() user: User): Promise<User> {
    let registeredUser = await this.userRepo.create(user);

    return registeredUser;
  }




}
