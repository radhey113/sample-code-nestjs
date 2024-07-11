import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Models, AdminDocument } from 'src/schemas';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Models.Admin.name)
    private readonly admin: Model<AdminDocument>,
  ) {}

  /**
   * Signup
   * @param body
   * @returns
   */
  async signup(body) {
    const data = await this.admin.create(body);
    return data;
  }

  /**
   * Signin
   * @returns
   */
  async signIn() {
    return { login: true };
  }
}
