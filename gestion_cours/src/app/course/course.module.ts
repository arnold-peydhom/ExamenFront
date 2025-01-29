import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDetailsComponent } from './course-card/course-details/course-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CourseCardComponent,
    CourseDetailsComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "course-detail/:idcourse", component:CourseDetailsComponent},
      { path: "course-card", component:CourseCardComponent}
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
