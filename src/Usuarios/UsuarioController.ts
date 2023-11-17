import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { usuarioRepository } from './usuario.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/lista-usuario.dto';
import { AtualizaUsuarioDTO } from './dto/atualiza-usuario.dto';

@Controller('/usuario')
export class UsuarioController {
  constructor(private usuarioRepository: usuarioRepository) {}

  @Post()
  async criarUsuario(@Body() criarUsuarios: CreateUserDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.id = uuid();
    usuarioEntity.name = criarUsuarios.name;
    usuarioEntity.email = criarUsuarios.email;
    usuarioEntity.password = criarUsuarios.password;

    this.usuarioRepository.save(usuarioEntity);

    return {
      message: 'Usuário criado com sucesso',
      usuario: new ListaUsuarioDTO(usuarioEntity.name, usuarioEntity.id),
    };
  }

  @Get('/listar')
  async listarUsuarios() {
    const users = await this.usuarioRepository.findAll();

    const usersDTO = users.map(
      (user) => new ListaUsuarioDTO(user.name, user.id),
    );
    return usersDTO;
  }

  @Put('/atualizar/:id')
  async atualizarUsuario(
    @Param('id') id: string,
    @Body() atualizarUsuarios: AtualizaUsuarioDTO,
  ) {
    const user = await this.usuarioRepository.updateUser(id, atualizarUsuarios);

    if (!user) {
      return {
        messagem: 'Usuário não encontrado',
      };
    }
    return {
      messagem: 'Usuário atualizado com sucesso',
      usuario: user,
    };
  }

  @Delete('/deletar/:id')
  async deletarUsuario(@Param('id') id: string) {
    const user = await this.usuarioRepository.deleteUser(id);

    return {
      messagem: 'Usuário deletado com sucesso',
      usuario: user,
    }
  }
}
