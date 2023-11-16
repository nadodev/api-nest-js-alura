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
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async criarUsuario(criarUsuarios) {
        const users = this.usuarioRepository.save(criarUsuarios);
        return users;
    }
    async listarUsuarios() {
        const users = this.usuarioRepository.findAll();
        return users;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criarUsuario", null);
__decorate([
    (0, common_1.Get)('/listar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listarUsuarios", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('/usuario'),
    __metadata("design:paramtypes", [usuario_repository_1.usuarioRepository])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map