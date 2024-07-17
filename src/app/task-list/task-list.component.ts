import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { TaskListItem } from '../models/task-list-item.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasklist!: TaskListItem[];
  @Output() taskListDeleted = new EventEmitter<number>();

  filterText: string = '';

  deleteTaskList(taskTitle: string) {
    this.tasklist = this.tasklist.filter(task => task.title !== taskTitle);
    this.updateTaskListCount();
  }

  updateTaskListCount() {
    const taskListCount = this.tasklist.length;
    this.taskListDeleted.emit(taskListCount);
  }

  get filteredTaskList(): TaskListItem[] {
    return this.tasklist.filter(task => task.title.toLowerCase().includes(this.filterText.toLowerCase()));
  }

  handleTaskDeleted(deletedTask: string) {
    for (let task of this.tasklist) {
      task.tasks = task.tasks.filter((t: string) => t !== deletedTask);
    }
  }
}
