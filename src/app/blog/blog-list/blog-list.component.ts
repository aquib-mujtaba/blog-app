import { Component, OnInit } from '@angular/core';
import { IBlog } from '../Blog';
import blogArray from "../blogs";
import { BlogsService } from '../servive/blogs.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
// blogs : IBlog[];
blogs: any;
  constructor(private _blogService: BlogsService) { }

  ngOnInit() {
    // this.blogs=blogArray;
    this._blogService.getBlogsList().subscribe(
      blogs=>{
        this.blogs=blogs;
      }
    );
  }

}
