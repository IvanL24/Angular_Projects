import { Component, OnInit } from '@angular/core';
// imported script from models.todo.ts
import { Todo } from '../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // instantiate the list variable to store an array of task
  lists: Todo[];
  constructor() {
    // instantiate 'lists' variable
    this.lists = [];
  }

  ngOnInit(): void {
    //array of task that are to be displayed on the main app
    this.lists = [
      {
        content: 'test task 1'
      },
      {
        content: 'test task 2'
      }
    ]
  }

}
