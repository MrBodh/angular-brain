import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-edit-user-modal',
  imports: [FormsModule],
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.scss'
})
export class EditUserModalComponent
implements OnDestroy {
  @Input() user!: User;
  @Output() saveUser = new EventEmitter<User>();
  @Output() closeModal = new EventEmitter<void>();

  ngOnDestroy(): void {
    console.log('model destroyed')
  }

  save(){
    this.saveUser.emit(this.user);
  }
  close(){
    this.closeModal.emit();
  }


}
