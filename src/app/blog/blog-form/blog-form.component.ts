import { Component, OnInit } from '@angular/core';
import Comments from '../Comments';
import { BlogsService } from '../servive/blogs.service';
import { Router } from '../../../../node_modules/@angular/router';
import { IBlog } from '../Blog';
import IAuthor from '../Authors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  authors: IAuthor[];
  // comments: Comments = new Comments(-1, -1, '', '', '');

  constructor(private _blogService: BlogsService, private _router: Router) { }

  ngOnInit() {

    this._blogService.getAuthorsList().subscribe
    (
      authors=>{this.authors=authors;}
    );
  }

  postBlog(postBlogForm)
  {
    var blogPost = postBlogForm.value;
    console.log( 'reviewForm.value = ', blogPost );
    var today = new Date();
    blogPost.postedDate=today.toString().substr(4, 6) + ',' + today.toString().substr(10, 5);
  
this._blogService.postBlog(blogPost).subscribe(
  response => {
    alert( 'Thanks for Posting Review - Your Blog has been added successfully' );
    this._router.navigate(['/blogs']);  
  });
}
}
