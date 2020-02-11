import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postLikes: number;
  @Input() postCreation: string;
  @Input() postStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  public counter: number = 0;

  increment() {
    this.counter +=1;
  }

  decrement() {
    this.counter -=1;
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
