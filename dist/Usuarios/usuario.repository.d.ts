import { UsuarioEntity } from './usuario.entity';
export declare class usuarioRepository {
    private users;
    save(user: UsuarioEntity): Promise<void>;
    findAll(): Promise<UsuarioEntity[]>;
    emailUnique(email: string): Promise<boolean>;
    updateUser(id: string, user: Partial<UsuarioEntity>): Promise<false | UsuarioEntity>;
}
