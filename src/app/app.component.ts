import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'todolist';

  //Todo List Value:
  list: any[] = [];
  remove: any = 0;
  addTask(item: string,) {
    this.list.push({ 'id': this.list.length + this.remove, 'name': item });
    console.log(this.list);
  }

  removeTask(id: number) {
    console.log("remove id:", id);
    this.remove = this.remove + 1;
    this.list = this.list.filter(item => item.id != id);
  }

}


