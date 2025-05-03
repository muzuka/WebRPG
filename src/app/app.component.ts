import { SimulationService } from 'src/app/services/simulation.service';
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
  output = '';
  error = '';

  constructor(private simulationService: SimulationService) {}

  runGame(code: string) {
    this.output = '';
    this.simulationService.runPythonCode(code).subscribe({
      next: (res) => {
        this.output = res.output;
        this.error = res.error;
        if (this.output.length != 0) {
          console.log(`Output: ${this.output}`);
        }
        if (this.error.length != 0) {
          console.log(`Error: ${this.error}`);
        }
      },
      error: (err) => {
        this.output = '';
        this.error = 'Server error: ' + JSON.stringify(err);
        console.log(`Output: ${this.output}, Error: ${this.error}`);
      }
    });
  }
}
