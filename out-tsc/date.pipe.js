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
var core_1 = require('@angular/core');
var date_service_1 = require('./date.service');
var DatePresentationPipe = (function () {
    function DatePresentationPipe(dateService) {
        this.dateService = dateService;
    }
    DatePresentationPipe.prototype.transform = function (item) {
        var which = this.dateService.dateOrDatetime(item);
        if (which === 'datetime') {
            return this.dateService.dateTime(item);
        }
        return this.dateService.date(item);
    };
    DatePresentationPipe = __decorate([
        core_1.Pipe({ name: 'datePresentation' }), 
        __metadata('design:paramtypes', [date_service_1.DateService])
    ], DatePresentationPipe);
    return DatePresentationPipe;
}());
exports.DatePresentationPipe = DatePresentationPipe;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-pipes/src/date.pipe.js.map