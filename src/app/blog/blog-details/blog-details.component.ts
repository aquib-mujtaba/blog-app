import { Component, OnInit } from '@angular/core';
import { IBlog } from '../Blog';
import BlogArray from '../blogs';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogs: IBlog;
  constructor() { }

  ngOnInit() {
    this.blogs=BlogArray[0]
  }

}
