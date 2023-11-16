import { Injectable } from '@nestjs/common';

@Injectable()
export class usuarioRepository {
  private users = [];

  async save(user: Array<string>) {
    this.users.push(user);
  }

  async findAll() {
    return this.users;
  }
}
