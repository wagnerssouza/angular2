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
var core_1 = require("@angular/core");
var CustomSearchComponent = (function () {
    function CustomSearchComponent() {
        this.airports = [];
        this.filterAirports = [];
        this.listCountries = [];
        this.userUpdated = new core_1.EventEmitter();
        this.airportCode = new core_1.EventEmitter();
    }
    CustomSearchComponent.prototype.ngDoCheck = function () {
        if (this.name) {
            this.airports = this.name;
            this.listCountries = this.name.countries;
        }
    };
    CustomSearchComponent.prototype.valueChange = function (newValue) {
        this.search = newValue;
        this.checkOptionsList = true;
        // if((this.search.length > 0) && (this.search.trim() !== '')) {
        //     this.checkOptionsList = true;        
        // } else {
        //     this.checkOptionsList = false;  
        // }
    };
    CustomSearchComponent.prototype.setName = function (name) {
        this.search = name.name;
        var filtro = this.name.airports.filter(function (n) {
            return n.country.name === name.name;
        });
        this.filterAirports = filtro;
        this.checkOptionsList = true;
        this.userUpdated.emit(name);
    };
    CustomSearchComponent.prototype.clickAirportCode = function (airportCode) {
        this.airportCode.emit(airportCode.iataCode);
    };
    return CustomSearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CustomSearchComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CustomSearchComponent.prototype, "checkOptionsList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CustomSearchComponent.prototype, "search", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CustomSearchComponent.prototype, "userUpdated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CustomSearchComponent.prototype, "airportCode", void 0);
CustomSearchComponent = __decorate([
    core_1.Component({
        selector: 'custom-search',
        templateUrl: 'app/custom-search/custom-search.component.html'
    }),
    __metadata("design:paramtypes", [])
], CustomSearchComponent);
exports.CustomSearchComponent = CustomSearchComponent;
//# sourceMappingURL=custom-search.component.js.map