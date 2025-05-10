import { NgFor, NgIf } from '@angular/common';
import { Component ,Inject,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(private authService:AuthService,private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted', this.loginForm.value);
      let credentials=this.loginForm.value;
      this.authService.login(credentials).subscribe({
        
        next: () => {
          // Handle successful login
          console.log(123)
          this.router.navigate(['/dashboard']);
        },
        error:  () => {
          // Handle login error
          console.log(111)
        }
      }
       
       
      );
      // Handle login logic here, e.g., send data to an authentication service
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.values(this.loginForm.controls).forEach(control => control.markAsTouched());
    }
  }
  // Getter methods for easy access to form controls in the template
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
