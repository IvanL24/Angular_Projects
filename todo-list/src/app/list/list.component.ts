import { Component, OnInit } from '@angular/core';
// imported script from models.todo.ts
import { List } from '../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // instantiate the list variable to store an array of task
  lists: List[];
  // instantiate variable as an empty string
  addTask:string = "";
  addId:number = 0;

  constructor() {
    // instantiate 'lists' variable
    this.lists = [];
    this.addId = 0;
  }

  ngOnInit(): void {
    //array of task that are to be displayed on the main app
    this.lists = [
      {
        content: 'Wash the dishes',
        id: 1
      },
      {
        content: 'Laundry',
        id:2
      }
    ]
  }

  /*
  *
  * Method to remove a task from the list.
  * id = pointer is automatically added for every task in the list.
  * id only allows number and will return an error ef ever the output is not a number.
  * 
  */
  removeTask (index:number){
    // if index is not equal to id, do not return anything
    this.lists = this.lists.filter((c, i) => i !== index);
  }

  /*
  * Method to add task into the list 
  *
  */
 newTask () {
  this.lists.push ({
    content: this.addTask,
    id: this.addId
  });

  // clears the input after adding task
  this.addTask = "";
 }
}
