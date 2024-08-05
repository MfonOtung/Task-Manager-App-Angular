import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],  //declared because it's used by the app component among other declarations in app module
    imports: [SharedModule, CommonModule, FormsModule]  //imported becuase TasksModule cannot have direct access to Card and Datepipe, but with SharedModule it does
    //Note: All task related folders/files  and imports are removed from the app module, and added to the declarations in tasks.module.ts
})


export class TasksModule {}