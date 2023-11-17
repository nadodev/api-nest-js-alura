import { Module } from '@nestjs/common';
import { UsuarioController } from './UsuarioController';
import { usuarioRepository } from './usuarioRepository';
import { EmailUniqueValidator } from './validation/email-unique.validator';



@Module({
  controllers: [UsuarioController],
  providers: [usuarioRepository, EmailUniqueValidator],
})
export class UsuarioModule {}