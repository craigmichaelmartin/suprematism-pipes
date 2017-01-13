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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var safe_pipe_1 = require('./safe.pipe');
var date_pipe_1 = require('./date.pipe');
var object_pipe_1 = require('./object.pipe');
__export(require('./safe.pipe'));
__export(require('./date.pipe'));
__export(require('./object.pipe'));
var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            declarations: [
                safe_pipe_1.SafeHtmlPipe,
                safe_pipe_1.SafeStylePipe,
                safe_pipe_1.SafeScriptPipe,
                safe_pipe_1.SafeUrlPipe,
                safe_pipe_1.SafeResourceUrlPipe,
                date_pipe_1.DatePresentationPipe,
                object_pipe_1.KeysPipe,
                object_pipe_1.TruthyKeysPipe
            ],
            exports: [
                safe_pipe_1.SafeHtmlPipe,
                safe_pipe_1.SafeStylePipe,
                safe_pipe_1.SafeScriptPipe,
                safe_pipe_1.SafeUrlPipe,
                safe_pipe_1.SafeResourceUrlPipe,
                date_pipe_1.DatePresentationPipe,
                object_pipe_1.KeysPipe,
                object_pipe_1.TruthyKeysPipe
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], PipesModule);
    return PipesModule;
}());
exports.PipesModule = PipesModule;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-pipes/src/index.js.map