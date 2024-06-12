// import { signal, computed, Component } from '@angular/core';
// //To update state, import 'signal' from angular/core and create a signal value in the UserComponent class

// import { DUMMY_USERS } from '../dummy-users'

// //To get a random user index
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   //imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
  
// })

//To display a single user on the UI:
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/images/users/' + this.selectedUser().avatar)
  
//   // get imagePath() {
//   //   return 'assets/images/users/' + this.selectedUser.avatar
//   // } - // used without signal

//   //To notify when a user is clicked
//   // onSelectUser() {
//   //   console.log('Clicked!');
//   // }

//   //To change users when a user button is clicked
//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);  //Inserted when using signal
//     //this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// }



import { Component, EventEmitter, Input,  Output, output } from '@angular/core';
//import an 'Input' decorator

type User = {
  id: string;
  avatar: string;
  name: string;
}
//or
// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
  
})

//To have a displayed list of user and their task when clicked:
//Also get rid of the signal and computed imports
export class UserComponent {
  @Input({required: true }) user!: User;
  @Output() select = new EventEmitter(); 

  // @Input() avatar!: string;
  // @Input() name!: string;

  //To check incomplete data input
  //@Input({ required: true }) id!: string;
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  //To display tasks of users:
  //import Output
  //@Output() select = new EventEmitter(); 
  //or
  //select = output<string>();

  //To accept an input using signal, first import 'input: a special function
  //avatar = input<string>();
  //avatar = input.required("");
   //name = input.required("");
   //avatar = input.required<string>();
   //name = input.required<string>();
  //name = input<string>()
  
  // imagePath = computed(() => {
  //   return 'assets/images/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/images/users/' + this.user.avatar;
  }

  onSelectUser() { 
    this.select.emit(this.user.id);
  }
}
