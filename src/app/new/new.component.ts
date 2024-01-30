import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent{
  @Output() closed = new EventEmitter<void>();

  closePopup() {
    this.closed.emit();

  }
}
