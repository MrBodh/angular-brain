import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard-page',
  imports: [FormsModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  two_way = "text from ts";
  isDisabled = false;

  message = '';

  showMessage() {
    this.message = 'Button clicked!';
  }
}
