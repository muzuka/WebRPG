import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameViewComponent,
         ConsoleComponent,
         EditorComponent,
        } from './components';

@Component({
  selector: 'app-root',
  imports: [EditorComponent, 
            GameViewComponent, 
            ConsoleComponent,
            FormsModule,],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css', '../styles.css'],
})
export class AppComponent {
  title = 'Homes';
}
