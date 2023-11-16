import { usuarioRepository } from './usuario.repository';
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: usuarioRepository);
    criarUsuario(criarUsuarios: any): Promise<void>;
    listarUsuarios(): Promise<any[]>;
}
