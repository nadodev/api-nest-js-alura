import { Module } from '@nestjs/common';
import { UsuarioController } from './UsuarioController';
import { usuarioRepository } from './usuario.repository';

@Module({
  controllers: [UsuarioController],
  imports: [],
  providers: [usuarioRepository],
})
export class UsuarioModule {}
