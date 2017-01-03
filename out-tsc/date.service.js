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
var moment = require('moment');
var DateService = (function () {
    function DateService() {
    }
    DateService.prototype.dateTime = function (item) {
        return moment(new Date(item)).format('MMMM D, YYYY HH:mm:ss');
    };
    DateService.prototype.date = function (item) {
        return moment(new Date(item)).format('LL');
    };
    DateService.prototype.dateOrDatetime = function (item) {
        var mValue = moment(new Date(item));
        if (mValue.hours() > 0 || mValue.minutes() > 0 || mValue.seconds() > 0) {
            return 'datetime';
        }
        else {
            return 'date';
        }
    };
    DateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DateService);
    return DateService;
}());
exports.DateService = DateService;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-pipes/src/date.service.js.map