import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

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

  // // addPost(): void {
  // //   this.courseCardService.addCourse(this.courseCardService.getCourse());
  // //   }
  // // }

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
