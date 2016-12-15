import {Component} from '@angular/core';
import {CourseService} from './course.service';
import {}

@Component({
    selector: 'courses',
    template: `
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})

export class CoursesComponent { 
    title = "The Courses Page";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}