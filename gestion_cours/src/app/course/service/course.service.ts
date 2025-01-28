import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl = 'http://localhost:3000/courses';

  constructor(private httpClient: HttpClient) { }

  getAllCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.courseUrl}`);
  }

  // getCourseById(id: number): Observable<Course> {
  //   return this.httpClient.get<Course>(`${this.courseUrl}?id=${id}`);
  // }

  // addCourse(course: Course): Observable<any> {
  //   return this.httpClient.post<Course>(this.courseUrl, course);
  // }

  // updateCourse(id: number, course: Course): Observable<Course> {
  //   return this.httpClient.put<Course>(`${this.courseUrl}/${id}`, course);
  // }

  deleteCourse(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.courseUrl}/${id}`);
  }
}
