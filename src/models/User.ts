export interface UserInterface {
  "name": string;
  "email": string;
  "password": string;
  "role"?: string;
}

export default class User implements UserInterface {
  "name": string;
  "email": string;
  "password": string;
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
}