import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-user-details-card',
  imports: [],
  templateUrl: './user-details-card.component.html',
  styleUrl: './user-details-card.component.scss'
})
export class UserDetailsCardComponent {
  @Input() user!: User;
}
