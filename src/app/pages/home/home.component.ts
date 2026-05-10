import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../../components/counter/counter.component';
import { TableComponent } from '../../components/table/table.component';
import { EditUserModalComponent } from '../../components/edit-user-modal/edit-user-modal.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule,CounterComponent,TableComponent,EditUserModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  users : User[] = [];
  constructor(
    private userService: UserService
  ) {
    this.users = this.userService.users;
  }
  ngOnInit(): void {
    console.log('HomeComponent Initialized');
  }


  isModalOpen = false;
  selectedUser : User | null = null;
  count = 0;
  
  
  incrementCount(value: number){
    this.count += value;
  }
  incrementScore(user_id:number){
    const user = this.users.find(user => user.id === user_id);
    if(user){
      user.score += 5;
    }
  }
  openEditModal(user_id:number){
    const user = this.users.find(user => user_id === user.id);
    if(user){
      this.selectedUser = {
        ...user
      };
      this.isModalOpen = true;
    }
  }
  saveUser(updatedUser:any){
    const user = this.users.find(user => user.id === updatedUser.id)
    if(user){
      user.name = updatedUser.name;
      user.score = updatedUser.score;
    }
    this.isModalOpen = false
  }
  closeModal(){
    this.isModalOpen = false
  }
}
