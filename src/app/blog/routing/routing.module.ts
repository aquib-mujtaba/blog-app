import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { BlogCommentsComponent } from '../blog-comments/blog-comments.component';
import { BlogFormComponent } from '../blog-form/blog-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'blogs', component: BlogListComponent},
      {path: 'blogs/:id', component: BlogDetailsComponent,
      children:[
       { path:'',component:BlogCommentsComponent}, //BlogsComponent
       {path:'add',component:BlogFormComponent}
      ]
    },
    ])
  ],
  exports:[CommonModule,RouterModule],
  declarations: []
})
export class RoutingModule{ }
