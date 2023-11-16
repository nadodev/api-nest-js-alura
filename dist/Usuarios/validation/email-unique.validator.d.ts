import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { usuarioRepository } from '../usuario.repository';
export declare class EmailUniqueValidator implements ValidatorConstraintInterface {
    private usuarioRepository;
    constructor(usuarioRepository: usuarioRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnique: (validationOptions: ValidationOptions) => (object: any, propertyName: string) => void;
