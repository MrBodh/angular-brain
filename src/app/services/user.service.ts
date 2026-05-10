import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Ankit',
      score: 10
    },
    {
      id: 2,
      name: 'Rahul',
      score: 20
    },
    {
      id: 3,
      name: 'Priya',
      score: 30
    }
  ];
  constructor() { }
}
