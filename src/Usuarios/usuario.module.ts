import { Module } from '@nestjs/common';
import { UsuarioController } from './UsuarioController';
import { usuarioRepository } from './usuario.repository';
import { EmailUniqueValidator } from './validation/email-unique.validator';

@Module({
  controllers: [UsuarioController],
  imports: [],
  providers: [usuarioRepository, EmailUniqueValidator],
})
export class UsuarioModule {}
