import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postLikes = 0;
  @Input() postCreation: string;
  @Input() postStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  // public counter: number = 0;

  increment() {
    this.postLikes +=1;
  }

  decrement() {
    this.postLikes -=1;
  }

  getStatus() {
    return this.postStatus;
  }

  getColor() {
    if (this.postStatus === 'On') {
      return 'green'
    } else if (this.postStatus === 'Off') {
      return 'red';
    }
  }
}
