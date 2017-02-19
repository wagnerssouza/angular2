"use strict";
var router_1 = require("@angular/router");
var site_controller_1 = require("./site/site.controller");
var appRoutes = [
    { path: 'search', component: site_controller_1.SiteComponent },
    { path: '**', redirectTo: 'search' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map