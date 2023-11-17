import { IsEmail, MinLength, IsOptional } from 'class-validator';

export class AtualizaUsuarioDTO {
  @IsOptional()
  name: string;
  @IsOptional()
  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  email: string;

  @IsOptional()
  @MinLength(4, { message: 'A senha deve ter no mínimo 4 caracteres' })
  password: string;
}
