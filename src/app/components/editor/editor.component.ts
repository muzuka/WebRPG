import {Component} from '@angular/core';
import { MonacoEditorConstructionOptions, 
         MonacoStandaloneCodeEditor } from '@materia-ui/ngx-monaco-editor';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'editor-view',
  imports: [MonacoEditorModule],
  templateUrl: `./editor.component.html`,
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  title = 'Editor';
  code = `// Start coding`;
  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'vs-dark',
    language: 'python',
    automaticLayout: true,
    minimap: {enabled: false}
  };

  onEditorInit(editor: MonacoStandaloneCodeEditor) {
    console.log('Monaco ready', editor);
  }
}