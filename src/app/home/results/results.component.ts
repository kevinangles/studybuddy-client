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
  data = [
    {
        "reference": "85499",
        "code": "COP2210",
        "name": "Programming I",
        "type": "Fully Online",
        "students": [],
        "professor": {
            "name": "Farzana Rahman"
        }
    },
    {
        "reference": "88112",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [],
        "professor": {
            "name": "Debra Davis"
        }
    },
    {
        "reference": "82015",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [
            {
                "uuid": "d995108a-4f1c-4953-8865-007073a870cd",
                "first_name": "Darcy",
                "last_name": "Calderon",
                "email": "dcald065@fiu.edu",
                "phone_number": "3055777103"
            }
        ],
        "professor": {
            "name": "Antonio Hernandez"
        }
    },
    {
        "reference": "82016",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [
            {
                "uuid": "67915226-474e-428c-a1f1-a1b221431902",
                "first_name": "Tamara",
                "last_name": "Cantu",
                "email": "tcant011@fiu.edu",
                "phone_number": "3055003655"
            },
            {
                "uuid": "50c30f29-2cea-49cb-8153-f18d8e9aca18",
                "first_name": "Birgit",
                "last_name": "Christian",
                "email": "bchri023@fiu.edu",
                "phone_number": "7143832422"
            }
        ],
        "professor": {
            "name": "Antonio Hernandez"
        }
    },
    {
        "reference": "81663",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [],
        "professor": {
            "name": "Antonio Hernandez"
        }
    },
    {
        "reference": "82153",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [],
        "professor": {
            "name": "Gregory Shaw"
        }
    },
    {
        "reference": "82154",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [],
        "professor": {
            "name": "Gregory Shaw"
        }
    },
    {
        "reference": "82128",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [],
        "professor": {
            "name": "Antonio Hernandez"
        }
    },
    {
        "reference": "82129",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [
            {
                "uuid": "6eca8725-e446-4060-9589-c214e3d1a6c4",
                "first_name": "Kanesha",
                "last_name": "Page",
                "email": "kpage071@fiu.edu",
                "phone_number": "5224891641"
            },
            {
                "uuid": "8f69b8b2-168b-468c-b2c1-b7251ee8d142",
                "first_name": "Phillip",
                "last_name": "Ramos",
                "email": "pramo102@fiu.edu",
                "phone_number": "8982143950"
            }
        ],
        "professor": {
            "name": "Antonio Hernandez"
        }
    },
    {
        "reference": "81664",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [],
        "professor": {
            "name": "Antonio Hernandez"
        }
    },
    {
        "reference": "82366",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [
            {
                "uuid": "18ba8d4a-fbb7-4c85-91ce-727e66e70655",
                "first_name": "Shani",
                "last_name": "Johns",
                "email": "sjohn001@fiu.edu",
                "phone_number": "7868497181"
            }
        ],
        "professor": {
            "name": "Debra Davis"
        }
    },
    {
        "reference": "82368",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [],
        "professor": {
            "name": "Debra Davis"
        }
    },
    {
        "reference": "82377",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [
            {
                "uuid": "4a93e5ee-f5e4-4f10-a9dc-9b55d6dd9ef3",
                "first_name": "Nikita",
                "last_name": "Boyd",
                "email": "nboyd080@fiu.edu",
                "phone_number": "7865027265"
            }
        ],
        "professor": {
            "name": "Debra Davis"
        }
    },
    {
        "reference": "82378",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [
            {
                "uuid": "8cce5893-7951-42a9-8e0a-3b476c22b1a2",
                "first_name": "Bruce",
                "last_name": "Robles",
                "email": "brobl002@fiu.edu",
                "phone_number": "7867394502"
            },
            {
                "uuid": "bc80fe82-cade-4092-b1b8-27bebd9e3590",
                "first_name": "Kevin",
                "last_name": "Angles",
                "email": "kangl010@fiu.edu",
                "phone_number": "7863999315"
            },
            {
                "uuid": "30b7ab97-f037-4a17-9db0-166addebd1ac",
                "first_name": "Shela",
                "last_name": "Gallegos",
                "email": "sgall045@fiu.edu",
                "phone_number": "9409224092"
            }
        ],
        "professor": {
            "name": "Debra Davis"
        }
    },
    {
        "reference": "82417",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [
            {
                "uuid": "f7676fba-c201-40f5-8b57-f4444a53c2bd",
                "first_name": "Dell",
                "last_name": "Woodard",
                "email": "dwood012@fiu.edu",
                "phone_number": "3058680489"
            },
            {
                "uuid": "8b645fc5-2401-447e-8fca-5e78e752a089",
                "first_name": "Myrtice",
                "last_name": "Solis",
                "email": "msoli002@fiu.edu",
                "phone_number": "7868749661"
            }
        ],
        "professor": {
            "name": "Debra Davis"
        }
    },
    {
        "reference": "87984",
        "code": "COP2210",
        "name": "Programming I",
        "type": "In Person",
        "students": [
            {
                "uuid": "2eb86ecc-c247-4a4e-aa94-fed001c42b09",
                "first_name": "Ivory",
                "last_name": "Hoover",
                "email": "ihoov010@fiu.edu",
                "phone_number": "3057820771"
            }
        ],
        "professor": {
            "name": "Richard Whittaker"
        }
    }
];

  constructor(private homeService: HomeService, private route: ActivatedRoute, private authService: AuthService) {

  }

  ngOnInit() {
    this.courseCode = this.route.snapshot.params.code;
    this.authService.setNavTitle(this.courseCode);

    this.courses = this.data;
    this.filteredCourses = this.data;
    this.courseName = this.courses[0].name;
    this.professors = this.getProfessorNames(this.courses);
    this.references = this.getReferences(this.courses);

    // this.homeService.searchByCode(this.courseCode).subscribe((data) => {
    //   this.courses = data;
    //   this.filteredCourses = data;
    //   this.courseName = this.courses[0].name;
    //   this.professors = this.getProfessorNames(this.courses);
    //   this.references = this.getReferences(this.courses);
    // });
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