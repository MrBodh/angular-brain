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
      email: 'ankit@test.com',
      score: 10,
      
    },
    {
      id: 2,
      name: 'Rahul',
      email: 'rahul@test.com',
      score: 20
    },
    {
      id: 3,
      name: 'Priya',
      email: 'priya@test.com',
      score: 30
    }
  ];
  constructor() { }
}
