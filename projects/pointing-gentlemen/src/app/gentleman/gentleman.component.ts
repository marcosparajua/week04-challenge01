import { Component, Input } from '@angular/core';
import { GentlemenInterface } from '../../data';

@Component({
  selector: 'app-gentleman',
  templateUrl: './gentleman.component.html',
  styleUrls: ['./gentleman.component.css'],
})
export class GentlemanComponent {
  @Input() gentleman: GentlemenInterface | undefined;
}
