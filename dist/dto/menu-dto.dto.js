"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuDto = void 0;
const openapi = require("@nestjs/swagger");
class menuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { menuid: { required: true, type: () => Number }, menuname: { required: true, type: () => String }, menuprice: { required: true, type: () => Number }, menudescription: { required: true, type: () => String }, menuimg: { required: true, type: () => String }, toppings: { required: true, type: () => [String] } };
    }
}
exports.menuDto = menuDto;
//# sourceMappingURL=menu-dto.dto.js.map