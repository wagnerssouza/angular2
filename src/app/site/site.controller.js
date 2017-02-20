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
var http_1 = require("@angular/http");
var SiteComponent = (function () {
    function SiteComponent(http) {
        var _this = this;
        this.myDatePickerOptions = {
            dateFormat: 'dd-mm-yyyy',
        };
        this.initialDate = { year: 0, month: 0, day: 0 };
        this.endDate = { year: 0, month: 0, day: 0 };
        //private selDate: IMyDate = {year: 0, month: 0, day: 0};
        this.model1 = { date: { year: 2018, month: 10, day: 9 } };
        this.oneWayFlight = [];
        this.returnFlight = [];
        var d = new Date();
        this.initialDate = { year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate() };
        this.endDate = { year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate() };
        http
            .get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/')
            .map(function (res) { return res.json(); })
            .subscribe(function (air) {
            _this.oneWayFlight = air;
            _this.returnFlight = air;
            console.log(_this.returnFlight);
        }, function (erro) { return console.log(erro); }, function () { return console.log('Resolveu essa porra'); });
    }
    SiteComponent.prototype.dates = function (initialDate, endDate) {
        console.log(initialDate.formatted, endDate.formatted);
    };
    SiteComponent.prototype.handleUserUpdatedIda = function (user) {
        //console.log('vai cuzaaaaao cuzao do caralho, vai viajar né?? ', user);
    };
    SiteComponent.prototype.handleUserUpdatedVolta = function (user) {
        // console.log('volta cuzaaaaao ',user);
    };
    SiteComponent.prototype.getAirportCodeFrom = function (code) {
        console.log('from ', code);
    };
    SiteComponent.prototype.getAirportCodeTo = function (code) {
        console.log('to ', code);
    };
    return SiteComponent;
}());
SiteComponent = __decorate([
    core_1.Component({
        selector: 'site',
        templateUrl: 'app/site/site.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], SiteComponent);
exports.SiteComponent = SiteComponent;
//# sourceMappingURL=site.controller.js.map