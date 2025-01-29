import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {
  courseForm!: FormGroup;

  constructor(private fb: FormBuilder, private courseaddservice: CourseService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.courseForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      duree: ['', Validators.required],
    });
  }

  addCourse(): void {
    const courseAdd = this.courseForm.value as Course;
    this.courseaddservice
      .addCourse(courseAdd)
      .subscribe();
    this.initForm();
    this.confirmation();
  }

  confirmation(): void {
    alert("Cour ajouter avec success ✅");
  }

}
