import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  users : User[] = [];
  constructor(
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
