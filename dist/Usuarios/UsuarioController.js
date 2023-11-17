"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_repository_1 = require("./usuario.repository");
const create_user_dto_1 = require("./dto/create-user.dto");
const usuario_entity_1 = require("./usuario.entity");
const uuid_1 = require("uuid");
const lista_usuario_dto_1 = require("./dto/lista-usuario.dto");
const atualiza_usuario_dto_1 = require("./dto/atualiza-usuario.dto");
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async criarUsuario(criarUsuarios) {
        const usuarioEntity = new usuario_entity_1.UsuarioEntity();
        usuarioEntity.id = (0, uuid_1.v4)();
        usuarioEntity.name = criarUsuarios.name;
        usuarioEntity.email = criarUsuarios.email;
        usuarioEntity.password = criarUsuarios.password;
        this.usuarioRepository.save(usuarioEntity);
        return {
            message: 'Usuário criado com sucesso',
            usuario: new lista_usuario_dto_1.ListaUsuarioDTO(usuarioEntity.name, usuarioEntity.id),
        };
    }
    async listarUsuarios() {
        const users = await this.usuarioRepository.findAll();
        const usersDTO = users.map((user) => new lista_usuario_dto_1.ListaUsuarioDTO(user.name, user.id));
        return usersDTO;
    }
    async atualizarUsuario(id, atualizarUsuarios) {
        const user = await this.usuarioRepository.updateUser(id, atualizarUsuarios);
        if (!user) {
            return {
                messagem: 'Usuário não encontrado',
            };
        }
        return {
            messagem: 'Usuário atualizado com sucesso',
            usuario: user,
        };
    }
    async deletarUsuario(id) {
        const user = await this.usuarioRepository.deleteUser(id);
        return {
            messagem: 'Usuário deletado com sucesso',
            usuario: user,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criarUsuario", null);
__decorate([
    (0, common_1.Get)('/listar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listarUsuarios", null);
__decorate([
    (0, common_1.Put)('/atualizar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_usuario_dto_1.AtualizaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizarUsuario", null);
__decorate([
    (0, common_1.Delete)('/deletar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deletarUsuario", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('/usuario'),
    __metadata("design:paramtypes", [usuario_repository_1.usuarioRepository])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map