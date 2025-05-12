import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {
constructor(private authService: AuthService, private router: Router) { }

//  ngOnInit(): void {
//    this.authService.getProfile().subscribe({
//         next: (response) => {
//           // Handle successful login
//          console.log(response,123)
//         },
//         error: (err) => {
//           // Handle login error
//           console.log(err,111)
//         }
//       }
//       );
//   }

}
