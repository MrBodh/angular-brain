import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user-modal',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.scss'
})
export class EditUserModalComponent
implements OnInit, OnDestroy  {
  @Input() user!: User;
  @Output() saveUser = new EventEmitter<User>();
  @Output() closeModal = new EventEmitter<void>();

  userForm !: FormGroup;
  constructor() {
    console.log('Constructor called');
  }

  ngOnDestroy(): void {
    console.log('model destroyed')
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.userForm = new FormGroup({
      name : new FormControl(
        this.user.name,
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ),
      score : new FormControl(
        this.user.score,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
      ),
      email : new FormControl(
        this.user.email,
        [
          Validators.required,
          Validators.email
        ]
      )
    });
  }


  save(){
    const updatedUser : User = {
      id : this.user.id,
      name : this.userForm.value.name,
      score : this.userForm.value.score,
      email: this.userForm.value.email

    };
    this.saveUser.emit(updatedUser);
  }
  close(){
    this.closeModal.emit();
  }


}
