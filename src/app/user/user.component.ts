import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { USERS } from './users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: String;

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.forEach(param => {
          this.user = USERS[param.index];
      })
  }

}
