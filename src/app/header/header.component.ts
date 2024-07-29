import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isLoggedIn: Observable<boolean>;

  constructor(public authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
