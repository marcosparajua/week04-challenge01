import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() selectAll: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSelectAll() {
    this.selectAll.emit(true);
  }
}
