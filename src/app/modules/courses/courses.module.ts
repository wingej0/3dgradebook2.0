import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { PageLayoutModule } from '../page-layout/page-layout.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CanvasCoursesComponent } from './canvas-courses/canvas-courses.component';



@NgModule({
  declarations: [CoursesComponent, CanvasCoursesComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
