import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }
  constructor(private fb: FormBuilder,private authService: AuthService,private route:Router) {}

  initForm(){
    this.registerForm = this.fb.group({
      username: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  addUser(): void {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;

      this.authService.addUser(username, password).subscribe(
        () => {
          alert('Utilisateur ajouté avec succès ✅');
          this.registerForm.reset();
          this.route.navigate(["/auth"]);
        },
        (error) => {
          alert('Erreur lors de l\'ajout de l\'utilisateur ❌');
          console.error(error);
        }
      );
    }
  }
}
