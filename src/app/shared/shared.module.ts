import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
declarations: [CardComponent],  //remove the card decorator in app module
exports: [CardComponent] //declared to tell angular that it should be available to any other app using the shared module
})
export class SharedModule{}