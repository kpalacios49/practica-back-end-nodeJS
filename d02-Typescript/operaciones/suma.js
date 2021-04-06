"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(a, b) {
        this.a = a;
        this.b = b;
    }
    Suma.prototype.resultado = function () {
        return this.a + this.b;
    };
    return Suma;
}());
exports.Suma = Suma;
