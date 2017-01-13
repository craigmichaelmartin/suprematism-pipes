import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SafeHtmlPipe, SafeStylePipe, SafeScriptPipe, SafeUrlPipe,
  SafeResourceUrlPipe } from './safe.pipe';
import { DatePresentationPipe } from './date.pipe';
import { KeysPipe, TruthyKeysPipe } from './object.pipe';

export * from './safe.pipe';
export * from './date.pipe';
export * from './object.pipe';

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
        KeysPipe,
        TruthyKeysPipe
    ],
    exports: [
        SafeHtmlPipe,
        SafeStylePipe,
        SafeScriptPipe,
        SafeUrlPipe,
        SafeResourceUrlPipe,
        DatePresentationPipe,
        KeysPipe,
        TruthyKeysPipe
    ],
})
export class PipesModule {

}
