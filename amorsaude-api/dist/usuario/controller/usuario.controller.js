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
const usuario_service_1 = require("../services/usuario.service");
const dto_helper_service_1 = require("../dto/dto-helper.service");
const create_usuario_dto_1 = require("../dto/create-usuario.dto");
const login_usuario_dto_1 = require("../dto/login-usuario.dto");
let UsuarioController = class UsuarioController {
    constructor(usuarioService, dtoHelperService) {
        this.usuarioService = usuarioService;
        this.dtoHelperService = dtoHelperService;
    }
    teste() {
        return this.usuarioService.teste();
    }
    async create(createUsuarioDto) {
        const userEntity = await this.dtoHelperService.createUsuarioDtoToEntity(createUsuarioDto);
        return this.usuarioService.create(userEntity);
    }
    async login(loginUsuarioDto) {
        const userEntity = await this.dtoHelperService.loginUserDtoToEntity(loginUsuarioDto);
        const jwt = await this.usuarioService.login(userEntity);
        return {
            access_token: jwt,
            token_type: 'JWT',
            expire_in: 10000
        };
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Get)('teste'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "teste", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_usuario_dto_1.LoginUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        dto_helper_service_1.DtoHelperService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map