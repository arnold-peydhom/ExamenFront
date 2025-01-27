import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../course/home/home.component';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "home", component:HomeComponent}
    ])
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
