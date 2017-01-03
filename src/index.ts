import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SafeHtmlPipe, SafeStylePipe, SafeScriptPipe, SafeUrlPipe,
  SafeResourceUrlPipe } from './safe.pipe';
import { DatePresentationPipe } from './date.pipe';
import { DateService } from './date.service';

export * from './safe.pipe';
export * from './date.pipe';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SafeHtmlPipe,
        SafeStylePipe,
        SafeScriptPipe,
        SafeUrlPipe,
        SafeResourceUrlPipe,
        DatePresentationPipe,
    ],
    providers: [
      DateService
    ],
    exports: [
        SafeHtmlPipe,
        SafeStylePipe,
        SafeScriptPipe,
        SafeUrlPipe,
        SafeResourceUrlPipe,
        DatePresentationPipe,
    ],
})
export class PipesModule {

}
