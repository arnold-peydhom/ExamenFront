import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../course/home/home.component';
import { CourseCardComponent } from '../course/course-card/course-card.component';
import { CourseDetailsComponent } from '../course/course-card/course-details/course-details.component';
import { AddCourseComponent } from '../course/add-course/add-course.component';
import { AuthComponent } from '../auth/auth/auth.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "home", component:HomeComponent},
      { path: "course-card", component:CourseCardComponent},
      { path: "add-course", component:AddCourseComponent},
      { path: "course-detail", component:CourseDetailsComponent},
      { path: "auth", component:AuthComponent},
    ]),
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class ViewModule { }
