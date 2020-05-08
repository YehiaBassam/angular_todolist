import { Component } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todolist';
  todoArray=[];

  /*add item to array*/
  addTodo(value)
  {    
    if (value !== "") {
      this.todoArray.push(value);
      console.log(this.todoArray);
    }
    else { alert('Please fill the TodoForm') }
  } 


/*delete item*/
deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
        if (todo == this.todoArray[i]) {
          this.todoArray.splice(i,1)
        }
    }
}

// todoSubmit(value)
//   {    
//     console.log(value);
//     // if (value !== "") {
//     //   this.todoArray.push(value);
//     //   console.log(this.todoArray);
//     // }
//     // else { alert('Please fill the TodoForm') }
//   }

}
