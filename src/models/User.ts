export interface UserInterface {
  "username": string;
  "name"?: string;
  "email"?: string;
  "password"?: string;
  "role"?: string;
}

export default class User implements UserInterface {
  "username": string;
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
}