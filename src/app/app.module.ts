import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; //mmust be imported when boostrapping appmodule

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
//import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent, 
        //CardComponent, 
        TasksComponent,
        TaskComponent,
        NewTaskComponent
    ], //declaration is for non-standalone component
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule]  //Datepipe does not need to be added here because it is automatically unlocked by the browser module
    //imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent] //imports is for standalone components
})  
export class AppModule {}