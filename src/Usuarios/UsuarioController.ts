import { Body, Controller, Get, Post } from '@nestjs/common';
import { usuarioRepository } from './usuario.repository';

@Controller('/usuario')
export class UsuarioController {
  constructor(private usuarioRepository: usuarioRepository) {}

  @Post()
  async criarUsuario(@Body() criarUsuarios) {
    const users = this.usuarioRepository.save(criarUsuarios);
    return users;
  }

  @Get('/listar')
  async listarUsuarios() {
    const users = this.usuarioRepository.findAll();
    return users;
  }
}
