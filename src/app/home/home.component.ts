import { Component, Input } from '@angular/core'; // Import Input correctly
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskListItem } from '../models/task-list-item.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  tasklist: TaskListItem[] = [
    { title: 'Humber', tasks: ['Task 1', 'Task 2', 'Task 3'], id: 1 },
    { title: 'MERN', tasks: ['Lab', 'Project', 'Quiz'], id: 2 },
    { title: 'Java', tasks: ['Group Discussion', 'Exam', 'Assignment'], id: 3 },
  ];

  @Input() taskListCount!: number;

  handleTaskListDeleted(updatedTaskListCount: number) {
    this.taskListCount = updatedTaskListCount;
  }
}
