"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepository = void 0;
const common_1 = require("@nestjs/common");
let usuarioRepository = class usuarioRepository {
    constructor() {
        this.users = [];
    }
    async save(user) {
        this.users.push(user);
    }
    async findAll() {
        return this.users;
    }
    async emailUnique(email) {
        const emailExists = this.users.find((u) => u.email === email);
        return emailExists !== undefined;
    }
    async updateUser(id, user) {
        const userIndex = this.searchUserIndex(id);
        Object.entries(user).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }
            userIndex[key] = value;
        });
        return userIndex;
    }
    async deleteUser(id) {
        const user = this.searchUserIndex(id);
        this.users = this.users.filter((usuario) => usuario.id !== id);
        return user;
    }
    searchUserIndex(id) {
        const userIndex = this.users.find((usuario) => usuario.id === id);
        if (!userIndex) {
            return false;
        }
        return userIndex;
    }
};
usuarioRepository = __decorate([
    (0, common_1.Injectable)()
], usuarioRepository);
exports.usuarioRepository = usuarioRepository;
//# sourceMappingURL=usuario.repository.js.map