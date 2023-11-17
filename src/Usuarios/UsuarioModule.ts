import { Module } from '@nestjs/common';
import { usuarioController } from './usuarioController';
import { usuarioRepository } from './usuarioRepository';
import { EmailUniqueValidator } from './validation/email-unique.validator';



@Module({
  controllers: [usuarioController],
  providers: [usuarioRepository, EmailUniqueValidator],
})
export class UsuarioModule {}