
import {Component, Injectable, Output, EventEmitter} from '@angular/core';
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

  @Output() runEvent = new EventEmitter<string>();

  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'vs-dark',
    language: 'python',
    automaticLayout: true,
    minimap: {enabled: false}
  };

  onEditorInit(editor: MonacoStandaloneCodeEditor) {
    console.log('Monaco ready', editor);

    editor.onDidChangeModelContent(() => {
      this.code = editor.getValue();
    });
  };

  sendCode() {
    this.runEvent.emit(this.code);
  }
}