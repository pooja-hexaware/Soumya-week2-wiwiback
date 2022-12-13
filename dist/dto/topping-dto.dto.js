"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toppingDto = void 0;
const openapi = require("@nestjs/swagger");
class toppingDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { toppingid: { required: true, type: () => String }, toppingname: { required: true, type: () => String }, toppingprice: { required: true, type: () => Number }, toppingimg: { required: true, type: () => String } };
    }
}
exports.toppingDto = toppingDto;
//# sourceMappingURL=topping-dto.dto.js.map