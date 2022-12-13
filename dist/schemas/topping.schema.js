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
Object.defineProperty(exports, "__esModule", { value: true });
exports.toppingSchema = exports.topping = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let topping = class topping {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], topping.prototype, "toppingid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], topping.prototype, "toppingname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], topping.prototype, "toppingprice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], topping.prototype, "toppingimg", void 0);
topping = __decorate([
    (0, mongoose_1.Schema)()
], topping);
exports.topping = topping;
exports.toppingSchema = mongoose_1.SchemaFactory.createForClass(topping);
//# sourceMappingURL=topping.schema.js.map