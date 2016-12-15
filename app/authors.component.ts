import {Component} from '@angular/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'authors',
    template: `
        {{ title }}
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>
    `
})

export class AuthorsComponent { 
    title = "The Authors Page";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}