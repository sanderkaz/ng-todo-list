import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p class='todo-item'>
      <span class='todo-item__title' [class.done]='todoItem.done'>{{ todoItem.title }}</span>
      <input class="todo-checkbox"
             #checkDone
             [(ngModel)]="todoItem.done"
             type="checkbox"
             data-toggle='toggle'
             (click)="updateItem($event)"/>
      <button type="button" (click)="removeItem()">remove</button>
    </p>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  removeItem() {
    this.remove.emit(this.todoItem);
  }
  updateItem(event) {
    this.update.emit(!this.todoItem.done);
  }
}
