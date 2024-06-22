import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
    selector: 'app-root',
    standalone: true,
    // imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    //styleUrl: './header/header.component.css'
    styleUrl: './app.component.css'
    ,
    imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  title = 'udemy-angular-app';
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    //console.log('Selected user with id ' + id);
    this.selectedUserId = id;
  }
}
