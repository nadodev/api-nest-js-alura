import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class usuarioRepository {
  private users: UsuarioEntity[] = [];

  async save(user: UsuarioEntity) {
    this.users.push(user);
  }

  async findAll() {
    return this.users;
  }

  async emailUnique(email: string) {
    const emailExists = this.users.find((u) => u.email === email);
    return emailExists !== undefined;
  }

  async updateUser(id: string, user: Partial<UsuarioEntity>) {
    const userIndex = this.users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
      return false;
    }

    Object.entries(user).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      this.users[userIndex][key] = value;
    });

    return this.users[userIndex];
  }
}
