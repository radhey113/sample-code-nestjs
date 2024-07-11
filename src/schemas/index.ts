import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema, Admin } from 'src/schemas/admin';
import { UserSchema, User } from 'src/schemas/user';
import { Document } from 'mongoose';

const ModuleLoad = {
  Admin: MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
  User: MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
};
export default ModuleLoad;

export const Models = {
  Admin: { AdminSchema, name: Admin.name },
  User: { UserSchema, name: User.name },
};

export type AdminDocument = Admin & Document;
export type UserDocument = User & Document;
