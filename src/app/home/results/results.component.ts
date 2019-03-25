import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { ICourse } from './course';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  course: ICourse = {};
  courses: ICourse[] = [];
  filteredCourses: ICourse[] = [];
  professors: string[] = [];
  references: string[] = [];
  query: string;
  resultCount: number;

  constructor(private homeService: HomeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.course.code = this.route.snapshot.params.code;
    this.homeService.setNavTitle(this.course.code);
    this.homeService.searchByCode(this.course.code).subscribe((data) => {
      this.course.name = data[0].name;
      this.getCourses(data);
      this.getProfessorNames(this.courses);
      this.getReferences(this.courses);
      this.getResultCount(this.courses);
      this.randomizeResults(this.courses);
    });
  }

  // Gets courses which have students in them
  getCourses(data: ICourse[]) {
    // Check each course's student array for > 0
    this.courses = data.filter(course => course.students.length);
    this.filteredCourses = data.filter(course => course.students.length);
  }

  // Returns an array with professor names who have students in their courses
  getProfessorNames(courses: ICourse[]) {
    let names: string[] = [];

    // Get professor names from array of course objects
    names = courses.map((course) => course.professor.name);

    // Remove duplicate professor names by comparing the current index
    // with the first index at which the name appears in
    this.professors = names.filter((name, index, array) => {
      return array.indexOf(name) === index;
    });
  }

  // Returns an array with reference numbers that have students in them
  getReferences(courses: ICourse[]) {
    this.references = courses.map((course) => course.reference);
  }

  // Filter courses by a professor name when its checkbox is checked,
  // or unfilter courses when a checkbox is unchecked
  filterByProfessor(professor: string) {
    this.query = '';

    if ($(`input:checkbox[name='${professor}']`).is(":checked")) {
      // Get courses with the professor name that matches the checked professor name
      this.filteredCourses = this.courses.filter((course) => course.professor.name === professor);

      // Activate the checkbox of the professor name
      this.query = professor;
    } else {
      // Clear filter when checkbox is unchecked
      this.filteredCourses = this.courses;
    }

    // Count the number of results to check for no results
    this.getResultCount(this.filteredCourses);
  }

  // Filter courses by a reference number when its checkbox is checked,
  // or unfilter courses when a checkbox is unchecked
  filterByReference(reference: string) {
    this.query = '';

    if ($(`input:checkbox[name='${reference}']`).is(":checked")) {
      // Get courses with the reference number that matches the checked reference number
      this.filteredCourses = this.courses.filter((course) => course.reference === reference);

      // Activate the checkbox of the reference number
      this.query = reference;
    } else {
      // Clear filter when checkbox is unchecked
      this.filteredCourses = this.courses;
    }

    // Count the number of results to check for no results
    this.getResultCount(this.filteredCourses);
  }

  // Count the number of results to either display them or a no results message
  getResultCount(filteredCourses: ICourse[]) {
    this.resultCount = 0;

    filteredCourses.forEach((course) => {
      this.resultCount += course.students.length;
    });
  }

  // Randomize results using Durstenfeld shuffle
  randomizeResults(filteredCourses: ICourse[]) {
    for (let i = filteredCourses.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCourses[i], filteredCourses[j]] = [filteredCourses[j], filteredCourses[i]];
    }
  }
}