import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  declarations: [BlogListComponent, BlogDetailsComponent, BlogFormComponent, BlogsComponent],
  exports:[BlogListComponent,BlogDetailsComponent],
  providers:[]
})
export class BlogModule { }
