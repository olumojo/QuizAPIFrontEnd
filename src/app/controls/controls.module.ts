import { NgModule } from "@angular/core";
import { DateComponent } from "./date/date.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        DateComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        DateComponent
    ]
})
export class ControlsModule {

}