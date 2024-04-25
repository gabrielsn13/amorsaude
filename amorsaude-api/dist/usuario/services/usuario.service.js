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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../entities/usuario.entity");
const typeorm_2 = require("typeorm");
const auth_service_1 = require("../../auth/services/auth.service");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository, authService) {
        this.usuarioRepository = usuarioRepository;
        this.authService = authService;
    }
    teste() {
        return 'teste api';
    }
    async create(newUsuario) {
        const existeEmail = await this.existeEmail(newUsuario.email);
        const existeNomeUsuario = await this.existeNomeUsuario(newUsuario.username);
        if (existeEmail === false && existeNomeUsuario === false) {
            const passwordHash = await this.authService.hashPassword(newUsuario.password);
            newUsuario.password = passwordHash;
            newUsuario.email = newUsuario.email.toLowerCase();
            newUsuario.username = newUsuario.username.toLowerCase();
            const user = await this.usuarioRepository.save(this.usuarioRepository.create(newUsuario));
            return this.procurarPorUsuario(user.id);
        }
        else {
            throw new common_1.HttpException('Email ou usuario ja criados', common_1.HttpStatus.CONFLICT);
        }
    }
    async existeEmail(email) {
        const usuario = await this.usuarioRepository.findOne({
            where: { email }
        });
        return !!usuario;
    }
    async existeNomeUsuario(username) {
        const usuario = await this.usuarioRepository.findOne({
            where: { username }
        });
        return !!usuario;
    }
    async getUsuarioPorId(id) {
        return this.usuarioRepository.findOneOrFail({
            where: {
                id: id,
            },
        });
    }
    async procurarPorUsuario(id) {
        return this.usuarioRepository.findOne({
            where: { id }
        });
    }
    async procurarPorEmail(email) {
        return this.usuarioRepository.findOne({
            where: { email },
            select: ['id', 'email', 'password', 'username']
        });
    }
    async login(usuario) {
        const usuarioEncontrado = await this.procurarPorEmail(usuario.email);
        if (usuarioEncontrado) {
            const passwordsMatchin = await this.authService.comparePasswords(usuario.password, usuarioEncontrado.password);
            if (passwordsMatchin === true) {
                const payload = await this.procurarPorUsuario(usuarioEncontrado.id);
                return this.authService.generateJwt(payload);
            }
            else {
                throw new common_1.HttpException('Login invalido, credenciais erradas', common_1.HttpStatus.UNAUTHORIZED);
            }
        }
        else {
            throw new common_1.HttpException('Usuario nao encontrado', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map