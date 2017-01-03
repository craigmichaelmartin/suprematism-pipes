import { PipeTransform } from '@angular/core';
import { DateService } from './date.service';
export declare class DatePresentationPipe implements PipeTransform {
    dateService: DateService;
    constructor(dateService: DateService);
    transform(item: any): string;
}
