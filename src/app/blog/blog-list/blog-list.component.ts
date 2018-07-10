import { Component, OnInit } from '@angular/core';
import { IBlog } from '../Blog';
import blogArray from "../blogs";
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
blogs : IBlog[];
  constructor() { }

  ngOnInit() {
    this.blogs=blogArray;
  }

}
