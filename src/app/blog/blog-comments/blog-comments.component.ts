import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { BlogsService } from '../servive/blogs.service';

@Component({
  selector: 'app-blog-comments',
  templateUrl: './blog-comments.component.html',
  styleUrls: ['./blog-comments.component.css']
})
export class BlogCommentsComponent implements OnInit {
blogId: number;
reviews: any;
  constructor(private _activeRouter:ActivatedRoute,private _blogService:BlogsService) { }

  ngOnInit() {
    this._activeRouter.parent.paramMap.subscribe(
      params => {
        this.blogId = +params.get('id');
        this._blogService.getBlogComments(this.blogId).subscribe(
        reviews =>this.reviews= reviews
        );
      }
    );
  }

}
