import { Injectable } from '@nestjs/common';
import {usuarioEntity } from './usuarioEntity';

@Injectable()
export class usuarioRepository {
  private users: usuarioEntity[] = [];

  async save(user: usuarioEntity) {
    this.users.push(user);
  }

  async findAll() {
    return this.users;
  }

  async emailUnique(email: string) {
    const emailExists = this.users.find((u) => u.email === email);
    return emailExists !== undefined;
  }

  async updateUser(id: string, user: Partial<usuarioEntity>) {
    const userIndex = this.searchUserIndex(id);

    Object.entries(user).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      userIndex[key] = value;
    });

    return userIndex;
  }

  async deleteUser(id: string) {
    const user = this.searchUserIndex(id);

    this.users = this.users.filter((usuario) => usuario.id !== id);

    return  user
  }

  private searchUserIndex(id: string) {
    const userIndex = this.users.find((usuario) => usuario.id === id);

    if (!userIndex) {
      return false;
    }

    return userIndex;
  }
}
