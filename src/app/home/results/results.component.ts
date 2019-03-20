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
  resultCount: number = 0;

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
      this.resultCount = this.getResultCount(this.filteredCourses);
      this.randomizeResults(this.filteredCourses);
    });
  }

  // Returns an array with professors who have students in their courses
  getProfessorNames(courses: any[]) {
    let names: string[] = [];
    let uniqueNames: string[] = [];

    for (let course of courses) {
      if (course.students.length) {
        names.push(course.professor.name);
      }
    }

    uniqueNames = names.filter((item, i, array) => {
      return array.indexOf(item) === i;
    });

    return uniqueNames;
  }

  // Returns an array with reference numbers that have students in them
  getReferences(courses: any[]) {
    let references: number[] = [];

    for (let course of courses) {
      if (course.students.length) {
        references.push(course.reference);
      }
    }

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

    this.resultCount = this.getResultCount(this.filteredCourses);
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

    this.resultCount = this.getResultCount(this.filteredCourses);
  }

  getResultCount(filteredCourses: any[]) {
    let count: number = 0;

    filteredCourses.forEach((course) => {
      count += course.students.length;
    });

    return count;
  }

  randomizeResults(filteredCourses: any[]) {
    for (let i = filteredCourses.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCourses[i], filteredCourses[j]] = [filteredCourses[j], filteredCourses[i]];
    }
  }
}