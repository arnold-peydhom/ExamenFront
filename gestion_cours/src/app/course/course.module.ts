import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    CourseCardComponent,
    CourseDetailsComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "course-detail/:idcourse", component:CourseDetailsComponent},
      { path: "course-card", component:CourseCardComponent},
      { path: "add-course", component: AddCourseComponent },
    ])
  ],
  exports: [
    CourseCardComponent,
    CourseDetailsComponent,
    AddCourseComponent,
  ]
})
export class CourseModule { }
