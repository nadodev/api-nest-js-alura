import { usuarioRepository } from './usuario.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsuarioEntity } from './usuario.entity';
import { ListaUsuarioDTO } from './dto/lista-usuario.dto';
import { AtualizaUsuarioDTO } from './dto/atualiza-usuario.dto';
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: usuarioRepository);
    criarUsuario(criarUsuarios: CreateUserDTO): Promise<{
        message: string;
        usuario: ListaUsuarioDTO;
    }>;
    listarUsuarios(): Promise<ListaUsuarioDTO[]>;
    atualizarUsuario(id: string, atualizarUsuarios: AtualizaUsuarioDTO): Promise<{
        messagem: string;
        usuario?: undefined;
    } | {
        messagem: string;
        usuario: UsuarioEntity;
    }>;
}
