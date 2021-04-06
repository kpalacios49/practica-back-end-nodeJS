"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(a, b) {
        this.a = a;
        this.b = b;
    }
    Resta.prototype.resultado = function () {
        return this.a - this.b;
    };
    return Resta;
}());
exports.Resta = Resta;
