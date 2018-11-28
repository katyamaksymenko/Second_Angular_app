import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  comment = {
    name: '',
    message: ''
  };

  comments = [];

  constructor() {
    this.comments = JSON.parse(localStorage.getItem('comments'));
  }

  send(): void {
    this.comments.push({ name: this.comment.name, message: this.comment.message });
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  delete(index): void {
      this.comments.splice(index, 1);
      localStorage.setItem('comments', JSON.stringify(this.comments));
  }

}
