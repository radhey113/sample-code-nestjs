import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDocument } from './admin.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<AdminDocument>,
  ) {}

  async getAdminUser() {
    return this.adminModel.findOne({});
  }

  async createAdmin(dataToSave) {
    return await this.adminModel.create(dataToSave);
  }
}
