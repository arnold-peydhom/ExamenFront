import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.authForm.valid) {
      const { username, password } = this.authForm.value;

      this.authService.login(username, password).subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['/add-course']);
          alert('Content de vous revoir ✅');
        } else {
          alert('Identifiants incorrects 😑: Username ou password incorrect !');
          this.authForm.reset();
        }
      });
    }
  }

  genericMessage() {
    return alert("Fonctionnalité disponible plutard!😉");
  }

}
