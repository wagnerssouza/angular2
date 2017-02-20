"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//import Airport from '../custom-search/airport.model';
var FiltroPorTitulo = (function () {
    function FiltroPorTitulo() {
    }
    FiltroPorTitulo.prototype.transform = function (listCountries, digitado) {
        digitado = digitado.toLowerCase();
        return listCountries.filter(function (country) {
            return country.name.toLowerCase().includes(digitado);
        });
    };
    return FiltroPorTitulo;
}());
FiltroPorTitulo = __decorate([
    core_1.Pipe({
        name: 'filtroPorTitulo'
    })
], FiltroPorTitulo);
exports.FiltroPorTitulo = FiltroPorTitulo;
//# sourceMappingURL=filter.pipes.js.map