import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailsComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "course-detail/:id", component: CourseDetailsComponent },
      { path: "course-list", component: CourseListComponent },
      { path: "add-course", component: AddCourseComponent },
    ])
  ],
  exports: [
    AddCourseComponent,
    CourseDetailsComponent,
    CourseListComponent
  ]
})
export class CourseModule { }
