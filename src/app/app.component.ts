import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showingPopup = false;

  showPopup() {
    this.showingPopup = true;
  }
  @Output() closed = new EventEmitter<void>();

  closePopup() {
    this.closed.emit();

  }
}