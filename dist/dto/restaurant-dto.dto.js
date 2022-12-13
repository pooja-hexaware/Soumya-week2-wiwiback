"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantDto = void 0;
const openapi = require("@nestjs/swagger");
class restaurantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { storeid: { required: true, type: () => Number }, storename: { required: true, type: () => String }, storeaddress: { required: true, type: () => String }, storezip: { required: true, type: () => Number }, storecity: { required: true, type: () => String }, storestate: { required: true, type: () => String }, storephone: { required: true, type: () => Number }, storeimage: { required: true, type: () => String } };
    }
}
exports.restaurantDto = restaurantDto;
//# sourceMappingURL=restaurant-dto.dto.js.map