import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'My second Angular App';
  comment = {
    name: '',
    message: '',
    delete: ''
  };

  comments = [];

    constructor() {
      this.comments = JSON.parse(localStorage.getItem('comments'));
    }

  send(): void {
    this.comments.push({ name: this.comment.name, message: this.comment.message, delete: this.comment.delete });
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  out(): void_ {
      this.comments.splice(0, 1);
      localStorage.removeItem('comments', JSON.parse(this.comments));
  }

}