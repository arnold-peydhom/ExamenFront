import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDetailsComponent } from './course-card/course-details/course-details.component';
import { CourseComponent } from './service/course/course.component';



@NgModule({
  declarations: [
    HomeComponent,
    CourseCardComponent,
    CourseDetailsComponent,
    CourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CourseCardComponent,
    CourseDetailsComponent
  ]
})
export class CourseModule { }
