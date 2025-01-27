import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDetailsComponent } from './course-card/course-details/course-details.component';
import { CourseComponent } from './service/course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    CourseCardComponent,
    CourseDetailsComponent,
    CourseComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "course-detail", component:CourseDetailsComponent},
    ])
  ],
  exports: [
    HomeComponent,
    CourseCardComponent,
    CourseDetailsComponent,
    AddCourseComponent,
  ]
})
export class CourseModule { }
