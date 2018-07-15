import { Component, OnInit } from '@angular/core';
import { IBlog } from '../Blog';
import BlogArray from '../blogs';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../servive/blogs.service';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogs: IBlog;
  blogId: number;
  constructor(private _activeRouter: ActivatedRoute,private _blogService: BlogsService) { }

  ngOnInit() {
    // this.blogId=this._activeRouter.snapshot.params.id;
    //     this.blogs=BlogArray[this.blogId-1];

    this._activeRouter.paramMap.subscribe(
      params => {
        this.blogId = +params.get('id');
        this._blogService.getBlogDetails(this.blogId).subscribe(
        blogs =>this.blogs= blogs
        )
      }
    );

  }

}
