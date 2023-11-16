import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailUnique } from '../validation/email-unique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Informe o nome do usuário' })
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailUnique({ message: 'O e-mail informado já está em uso' })
  email: string;

  @MinLength(4, { message: 'A senha deve ter no mínimo 4 caracteres' })
  password: string;
}
