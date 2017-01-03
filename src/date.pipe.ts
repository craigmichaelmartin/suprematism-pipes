import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from './date.service';

@Pipe({ name: 'datePresentation' })
export class DatePresentationPipe implements PipeTransform {
  constructor(public dateService: DateService) {}
  transform(item) {
    const which: string = this.dateService.dateOrDatetime(item);
    if (which === 'datetime') {
      return this.dateService.dateTime(item);
    }
    return this.dateService.date(item);
  }
}
