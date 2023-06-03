import { Friend } from ".";

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  friends: Friend[];
  resetToken: string;
};
