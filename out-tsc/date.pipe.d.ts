import { PipeTransform } from '@angular/core';
export declare class DatePresentationPipe implements PipeTransform {
    static dateTime(item: any): string;
    static date(item: any): string;
    static dateOrDatetime(item: any): string;
    transform(item: any): string;
}
