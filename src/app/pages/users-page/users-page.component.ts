import { Component , OnInit} from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { EditUserModalComponent } from '../../components/edit-user-modal/edit-user-modal.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users-page',
  imports: [TableComponent,EditUserModalComponent,CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  users: User[] = [];
  isModalOpen = false;
  selectedUser!: User;
  constructor(
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.users = this.userService.users;
  }

  incrementScore(userId: number) {
    const user = this.users.find(
      u => u.id === userId
    );
    if (!user) {
      return;
    }
    user.score = Math.min(
      user.score + 5,
      100
    );
  }

  openEditModal(userId: number) {
    const user = this.users.find(
      u => u.id === userId
    );
    if (!user) {
      return;
    }
    this.selectedUser = user;
    this.isModalOpen = true;
  }

  saveUser(updatedUser: User) {
    const index = this.users.findIndex(
      u => u.id === updatedUser.id
    );
    if (index === -1) {
      return;
    }
    this.users[index] = updatedUser;
    this.isModalOpen = false;
  }

  editUserScore(event: { userId: number; score: number }) {
    const user = this.users.find(u => u.id === event.userId);
    if (!user) return;
    user.score = Math.max(0, Math.min(event.score, 100));
  }

}
