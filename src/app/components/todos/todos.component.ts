import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

interface ITodo {
  content: string
  completed: boolean 
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todo: Todo[] = []
  

  ngOnInit(): void {
    this.todo = [
      {
      content: 'First todo',
      completed: false 
      },
      
      {
        content: 'Second todo',
        completed: true
      }


    ]
  }

}
