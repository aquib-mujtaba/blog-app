import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogListComponent, BlogDetailsComponent, BlogFormComponent, BlogsComponent]
})
export class BlogModule { }
