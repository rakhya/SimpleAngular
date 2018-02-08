import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  coursesArr = ['Telugu','Hindi','English'];

  newCourse = '';
  addCourse = function(){
    if (this.newCourse.trim() != ''){
      this.coursesArr.push(this.newCourse);
      this.newCourse='';
    }
  }

  removeCourse = function(i){
    this.coursesArr.splice(i,1);
  }
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
