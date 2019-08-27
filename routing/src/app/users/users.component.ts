import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Asher'
    },
    {
      id: 2,
      name: 'Isiah'
    },
    {
      id: 3,
      name: 'Breanuh'
    }
  ];
}
