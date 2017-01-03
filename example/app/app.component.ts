import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'supre-root',
  template: require('./app.component.html')
})
export class AppComponent {
  dateValue: Date = new Date(new Date().toLocaleDateString());
  datetimeValue: Date = new Date();
}
