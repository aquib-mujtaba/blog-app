import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { BlogsService } from '../servive/blogs.service';
import Comments from '../Comments';

@Component({
  selector: 'app-blog-comments',
  templateUrl: './blog-comments.component.html',
  styleUrls: ['./blog-comments.component.css']
})
export class BlogCommentsComponent implements OnInit {
blogId: number;
reviews: any;
comments: Comments = new Comments(-1, -1, '', '', '');
  constructor(private _activeRouter:ActivatedRoute,private _blogService:BlogsService, private _router: Router) { }

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

  submitComments(comments) {
    this._blogService.postComments(this.blogId, comments).subscribe(
      respoce=>{
      alert( 'Thanks for the review - it has been added successfully' );
      this.reviews.push(respoce)
      updatedComments => this._router.navigate(['/blogs', this.blogId])
    }
    );
  }

}

