import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  detailForm!: FormGroup;
  courseUpdate!: Course;

  constructor(
    private fb: FormBuilder,
    private coursedetailservice: CourseService,
    private route: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    const id = this.activateRoute.snapshot.paramMap.get('id'); // Ici, on prend 'id' au lieu de 'idcourse'
    if (id) {
      this.getCourseById(+id);  // Conversion en number
    }
  }

  initForm(): void {
    this.detailForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      duree: ['', Validators.required],
    });
  }

  getCourseById(id: number): void {
    this.coursedetailservice.getCourseById(id).subscribe((course) => {
      console.log('Données du cours récupérées :', course);
      this.courseUpdate = course;
      console.log("values", this.courseUpdate);
      this.setFormItems();
    });
  }

  setFormItems(): void {
    if (this.courseUpdate) {
      console.log('Données du cours à remplir dans le formulaire :', this.courseUpdate);
      this.detailForm.patchValue({
        titre: this.courseUpdate.titre,
        description: this.courseUpdate.description,
        duree: this.courseUpdate.duree,
      });

      // Vérifier l'état du formulaire après le remplissage
      console.log('Formulaire après patchValue :', this.detailForm.value);  // Devrait afficher les valeurs mises à jour
    }
  }

  updateCourse(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id'); // Utilisation de 'id' ici aussi

    if (id) {
      const updatedCourse: Course = { ...this.detailForm.value, id: +id }; // Mise à jour avec 'id'

      this.coursedetailservice.updateCourse(updatedCourse).subscribe(() => {
        alert('Cours mis à jour avec succès !');
        this.route.navigate(['/course-list']); // Redirection après mise à jour
      });
    }
  }
}
