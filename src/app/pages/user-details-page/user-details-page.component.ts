import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { UserDetailsCardComponent } from '../../components/user-details-card/user-details-card.component';

@Component({
  selector: 'app-user-details-page',
  imports: [UserDetailsCardComponent],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.scss'
})
export class UserDetailsPageComponent implements OnInit {
  user!: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {

    const id =
      Number(
        this.route.snapshot.paramMap.get('id')
      );

    const foundUser =
      this.userService.users.find(
        u => u.id === id
      );

    if (!foundUser) {
      return;
    }

    this.user = foundUser;

  }
}
