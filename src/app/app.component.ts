import {Component} from '@angular/core';
import { CodeEditorComponent } from "./components/editor/editor.component";
import { GameViewComponent } from './components/gameview/gameview.component';

@Component({
  selector: 'app-root',
  imports: [CodeEditorComponent, GameViewComponent],
  template: `
    <div>
      <h1>Hello World!</h1>
      <game-view> </game-view>
      <editor-view> </editor-view>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homes';
}
