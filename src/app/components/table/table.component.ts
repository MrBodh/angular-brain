import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule,RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() users!: User[];
  @Output() scoreChange = new EventEmitter<number>();
  @Output() editUser = new EventEmitter<number>();

  incrementScore(user_id: number){
    this.scoreChange.emit(user_id);
  }

  openEditModal(user_id: number){
    this.editUser.emit(user_id);
  }

}
