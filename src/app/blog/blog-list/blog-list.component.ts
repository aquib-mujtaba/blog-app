import { Component, OnInit } from '@angular/core';
import { IBlog } from '../Blog';
import blogArray from "../blogs";
import { BlogsService } from '../servive/blogs.service';
import { Router } from '@angular/router';
import IAuthor from '../Authors';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
blogs : IBlog[];
authors: IAuthor[];
// blogs: any;
  constructor(private _blogService: BlogsService,private _router: Router ) { }

  ngOnInit() {
    // this.blogs=blogArray;
    this._blogService.getBlogsList().subscribe
    (
      blogs=>{this.blogs=blogs;}
    );
    this._blogService.getAuthorsList().subscribe
    (
      authors=>{this.authors=authors;}
    );
  }
  navigateToProductDetails( id ) {
    console.log(id);
    // this._router.navigate( [ '/products' ] );
    this._router.navigateByUrl( `/blogs/${id}` );
}

}
