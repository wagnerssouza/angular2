"use strict";
var Airport = (function () {
    function Airport(t) {
        this.titulo = t;
    }
    Airport.prototype.getTitulo = function () {
        return this.titulo;
    };
    Airport.prototype.setTitulo = function (t) {
        this.titulo = t;
    };
    return Airport;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Airport;
//# sourceMappingURL=airport.model.js.map