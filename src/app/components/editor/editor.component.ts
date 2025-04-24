import { SimulationService } from 'src/app/services/simulation.service';
import {Component, Injectable} from '@angular/core';
import { MonacoEditorConstructionOptions, 
         MonacoStandaloneCodeEditor } from '@materia-ui/ngx-monaco-editor';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'editor-view',
  imports: [MonacoEditorModule],
  templateUrl: `./editor.component.html`,
  styleUrls: ['./editor.component.css'],
})
@Injectable({providedIn: 'root'})
export class EditorComponent {
  title = 'Editor';
  code: string = '// Start coding';
  output: string = '';
  error: string = '';

  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'vs-dark',
    language: 'python',
    automaticLayout: true,
    minimap: {enabled: false}
  };

  constructor(private simulationService: SimulationService) {}

  onEditorInit(editor: MonacoStandaloneCodeEditor) {
    console.log('Monaco ready', editor);

    editor.onDidChangeModelContent(() => {
      this.code = editor.getValue();
    });
  };

  run() {
    this.simulationService.runPythonCode(this.code).subscribe({
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