import {Component, Input} from '@angular/core';

@Component({
  selector: 'console-view',
  imports: [],
  templateUrl: `./console.component.html`,
  styleUrls: ['./console.component.css'],
})
export class ConsoleComponent {
  title = 'Homes';
  @Input() output: string = '';
  @Input() error: string = '';
}