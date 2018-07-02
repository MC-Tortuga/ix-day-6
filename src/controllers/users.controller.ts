import { Request, RestBindings, HttpErrors, get, param } from '@loopback/rest';

import { inject } from '@loopback/context';
import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';



export class UsersController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) { }

  // Map to `GET /ping`
  @get('/users')

  async getAllUsers(
  ): Promise<any[]> {

    return await this.userRepo.find();
  }

  @get("/users/{userId}")
  getSpecificUser(
    @param.path.string("userId") userId: string
  ): any {

    if (userId == "A") {
      return "ABC";
    }

    if (userId == "B") {
      return "BCD";
    }

    throw new HttpErrors.NotFound("ERROR, User Not Found");
  }
}


