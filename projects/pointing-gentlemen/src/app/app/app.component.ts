import { Component } from '@angular/core';
import { GentlemenInterface, gentlemen } from '../../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gentlemen = gentlemen;

  selectAll(selected: boolean) {
    this.gentlemen.forEach((gentleman) => (gentleman.selected = selected));
  }
}
