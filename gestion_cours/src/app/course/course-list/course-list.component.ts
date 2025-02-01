import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-List.component.html',
  styleUrl: './course-List.component.css'
})
export class CourseListComponent implements OnInit {

  constructor(private router: Router, private courseCard:CourseService) { }

  coursList!:Course[];

  ngOnInit(): void {
    this.getAllCourse();
    this.loadCourses();
  }
  getAllCourse() {
    this.courseCard.getAllCourse().subscribe((x) => {
      this.coursList = x;
    });
  }

  deleteCourse(id: number): void {
    this.courseCard.deleteCourse(id).subscribe();
    this.loadCourses();
  }

  loadCourses():void {
    this.courseCard.getAllCourse().subscribe((x)=> {
      this.coursList = x;
    })
  }
}
