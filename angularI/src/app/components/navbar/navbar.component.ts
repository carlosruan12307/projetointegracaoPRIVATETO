import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from 'src/app/interfaces/userData';
import { AuthService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  userData?: userData;

  constructor(private http: AuthService, private router: Router) {
    this.userData = this.http.userData;
  }

  logout(){
    this.http.logout().subscribe({
      next: valor => {
        this.router.navigate(["/"] )
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
