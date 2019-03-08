import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  courses: any[] = [];
  filteredCourses: any[] = [];
  courseCode: string;
  courseName: string;
  professors: string[] = [];
  references: number[] = [];
  query: string;
  profile;
  selectedCourse;

  constructor(private homeService: HomeService, private route: ActivatedRoute, private authService: AuthService) {

  }

  ngOnInit() {
    this.courseCode = this.route.snapshot.params.code;
    this.authService.setNavTitle(this.courseCode);

    this.homeService.searchByCode(this.courseCode).subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
      this.courseName = this.courses[0].name;
      this.professors = this.getProfessorNames(this.courses);
      this.references = this.getReferences(this.courses);
    });
  }

  getProfessorNames(courses: any[]) {
    let names: string[] = [];
    let uniqueNames: string[] = [];

    names = courses.map(course => course.professor.name);

    uniqueNames = names.filter((item, i, array) => {
      return array.indexOf(item) === i;
    });

    return uniqueNames;
  }

  getReferences(courses: any[]) {
    let references: number[] = [];

    references = courses.map(course => course.reference);

    return references;
  }

  filterByProfessor(professor: string) {
    this.query = '';
    const filter = professor.toLocaleLowerCase();
    if ($(`input:checkbox[name='${professor}']`).is(":checked")) {
      this.filteredCourses = this.courses.filter((course) =>
        course.professor.name.toLocaleLowerCase().indexOf(filter) !== -1);
      this.query = professor;
    } else {
      this.filteredCourses = this.courses;
    }
  }

  filterByReference(reference: string) {
    this.query = '';
    const filter = reference.toLocaleLowerCase();
    if ($(`input:checkbox[name='${reference}']`).is(":checked")) {
      this.filteredCourses = this.courses.filter((course) =>
        course.reference.toLocaleLowerCase().indexOf(filter) !== -1);
      this.query = reference;
    } else {
      this.filteredCourses = this.courses;
    }
  }
}