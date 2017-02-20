"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var site_controller_1 = require("./site.controller");
var custom_search_component_1 = require("../custom-search/custom-search.component");
var filter_pipes_1 = require("../pipes/filter.pipes");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var mydatepicker_1 = require("mydatepicker");
var SiteModule = (function () {
    function SiteModule() {
    }
    return SiteModule;
}());
SiteModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, platform_browser_1.BrowserModule, http_1.HttpModule, mydatepicker_1.MyDatePickerModule],
        declarations: [site_controller_1.SiteComponent, custom_search_component_1.CustomSearchComponent, filter_pipes_1.FiltroPorTitulo],
        exports: [site_controller_1.SiteComponent]
    })
], SiteModule);
exports.SiteModule = SiteModule;
//# sourceMappingURL=site.module.js.map