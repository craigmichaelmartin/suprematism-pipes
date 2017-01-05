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
var DatePresentationPipe = (function () {
    function DatePresentationPipe() {
    }
    DatePresentationPipe.dateTime = function (item) {
        return moment(new Date(item)).format('MMM D, YYYY HH:mm');
    };
    DatePresentationPipe.date = function (item) {
        return moment(new Date(item)).format('ll');
    };
    DatePresentationPipe.dateOrDatetime = function (item) {
        var mValue = moment(new Date(item));
        if (mValue.hours() > 0 || mValue.minutes() > 0 || mValue.seconds() > 0) {
            return 'datetime';
        }
        return 'date';
    };
    DatePresentationPipe.getPresentationDate = function (item) {
        var which = DatePresentationPipe.dateOrDatetime(item);
        if (which === 'datetime') {
            return DatePresentationPipe.dateTime(item);
        }
        return DatePresentationPipe.date(item);
    };
    DatePresentationPipe.prototype.transform = function (item) {
        return DatePresentationPipe.getPresentationDate(item);
    };
    DatePresentationPipe = __decorate([
        core_1.Pipe({ name: 'datePresentation' }), 
        __metadata('design:paramtypes', [])
    ], DatePresentationPipe);
    return DatePresentationPipe;
}());
exports.DatePresentationPipe = DatePresentationPipe;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-pipes/src/date.pipe.js.map