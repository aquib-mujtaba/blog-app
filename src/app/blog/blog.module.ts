import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BlogCommentsComponent } from './blog-comments/blog-comments.component';
import { BlogsService } from './servive/blogs.service';
// import {  NgxEditorModule } from 'ngx-editor';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    // NgxEditorModule,
    // TooltipModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FormsModule,
    SharedModule
  ],
  declarations: [BlogListComponent, BlogDetailsComponent, BlogFormComponent, BlogCommentsComponent],
  exports:[BlogListComponent,BlogDetailsComponent],
  providers:[
    BlogsService
  ]
})
export class BlogModule { }
