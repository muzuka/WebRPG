import {Component} from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'game-view',
  imports: [HeaderComponent],
  templateUrl: `./gameview.component.html`,
  styleUrls: ['./gameview.component.css'],
})
export class GameViewComponent {
  title = 'Homes';
}