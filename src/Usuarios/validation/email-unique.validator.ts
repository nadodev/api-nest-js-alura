import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { usuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ name: 'emailUnique', async: true })
export class EmailUniqueValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: usuarioRepository) {}
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const emailExists = await this.usuarioRepository.emailUnique(value);

    return !emailExists;
  }
}

export const EmailUnique = (validationOptions: ValidationOptions) => {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: EmailUniqueValidator,
    });
  };
};
