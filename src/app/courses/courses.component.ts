import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesArr = ['Telugu','Hindi','English','Maths'];

  newCourse = '';
  addCourse = function(){
    if (this.newCourse.trim() != ''){
      this.coursesArr.push(this.newCourse);
    }
    this.newCourse='';
  }

  removeCourse = function(i){
    this.coursesArr.splice(i,1);
  }
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
