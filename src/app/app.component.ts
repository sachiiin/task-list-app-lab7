import { Component } from '@angular/core';
import { TaskListItem } from './models/task-list-item.model';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasklist: TaskListItem[] = [
    { title: 'Humber', tasks: ['Task 1', 'Task 2', 'Task 3'], id: 1 },
    { title: 'MERN', tasks: ['Lab', 'Project', 'Quiz'], id: 2 },
    { title: 'Java', tasks: ['Group Discussion', 'Exam', 'Assignment'], id: 3 },
  ];

  taskListCount: number = this.tasklist.length;

  handleTaskListDeleted(updatedTaskListCount: number) {
    this.taskListCount = updatedTaskListCount;
  }
}
