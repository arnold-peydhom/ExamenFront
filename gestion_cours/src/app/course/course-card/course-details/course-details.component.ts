import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../service/course.service';
import { Course } from '../../models/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {

  detailForm!: FormGroup;
  courseUpdate!: Course;

  constructor(private fb: FormBuilder, private coursedetailservice: CourseService, private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();

    var idcourse = this.activateRoute.snapshot.paramMap.get('idcourse');
    if (idcourse) {
      this.getCourseById(+idcourse);
    }
  }

  initForm(): void {
    this.detailForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      duree: ['', Validators.required],
    })
  }

  getCourseById(idcourse: number): void {
    this.coursedetailservice.getCourseById(idcourse).subscribe((x) => {
      this.courseUpdate = x;
      console.log("values",this.courseUpdate);
      this.setFormItems();
    })
  }

  setFormItems():void{
    if(this.courseUpdate){
      console.log("course update", this.courseUpdate);
      this.detailForm.setValue({
        titre: this.courseUpdate.titre,
        description: this.courseUpdate.description,
        duree: this.courseUpdate.duree
      });
    }
  }

  updateCourse(): void {
    var idcourse = this.activateRoute.snapshot.paramMap.get('idcourse');
    const form = this.detailForm.value as Course;
    if (idcourse != null) {
      form.id = +idcourse;
      this.coursedetailservice.updateCourse(form).subscribe();
      this.getResponse();
    } else { }
  }

  getResponse(): void {
    this.route.navigateByUrl("/course-card");
    return alert("Cour modifié avec success ✅");
  }
}
