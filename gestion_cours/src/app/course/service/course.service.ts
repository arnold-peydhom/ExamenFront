import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl = 'http://localhost:3000/courses';
  //private getCoursByIdUrl = 'http://localhost:3000/courses/id';

  constructor(private httpClient: HttpClient) { }

  getAllCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.courseUrl}`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.courseUrl}?id=${id}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.courseUrl, course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.httpClient.put<Course>(this.courseUrl, course);
  }

  deleteCourse(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.courseUrl}/${id}`);
  }
}

