import {Component} from '@angular/core';
import { GameViewComponent,
         ConsoleComponent,
         EditorComponent,
        } from './components';

@Component({
  selector: 'app-root',
  imports: [EditorComponent, 
            GameViewComponent, 
            ConsoleComponent],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css', '../styles.css'],
})
export class AppComponent {
  title = 'Homes';
}
