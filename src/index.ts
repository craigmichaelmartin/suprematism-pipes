import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { NgModule } from '@angular/core';

export * from './pipes.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PipesComponent,
    ],
    exports: [
        PipesComponent,
    ],
    entryComponents: [
        PipesComponent,
    ]
})
export class PipesModule {

}
