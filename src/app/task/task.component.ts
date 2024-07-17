import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: string;
  @Output() taskDeleted = new EventEmitter<string>();

  deleteTask() {
    this.taskDeleted.emit(this.task);
  }
}
