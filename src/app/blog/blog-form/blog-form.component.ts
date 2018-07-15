import { Component, OnInit } from '@angular/core';
import Comments from '../Comments';
import { BlogsService } from '../servive/blogs.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogId: number;
  comments: Comments = new Comments(-1, -1, '', '', '');

  constructor(private _blogServive: BlogsService, private _router: Router) { }

  ngOnInit() {
  }

  submitComments(comments) {
    this._blogServive.postComments(this.blogId, comments).subscribe(
      updatedComments => this._router.navigate(['/blogs', this.blogId])
    );
  }

}
