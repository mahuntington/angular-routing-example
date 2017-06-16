import { Component } from '@angular/core';
import { USERS } from './user/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = USERS;
}
