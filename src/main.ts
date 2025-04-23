/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, BrowserModule, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent}           from './app/app.component';
import { importProvidersFrom }  from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { MonacoEditorModule }   from 'ngx-monaco-editor-v2';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';

bootstrapApplication(AppComponent, 
  {providers: [
    provideProtractorTestingSupport(), 
    importProvidersFrom(BrowserModule, FormsModule, MonacoEditorModule.forRoot()),
    provideMonacoEditor({
      baseUrl: '/assets/monaco-editor/vs'
    })
  ]}).catch((err) =>
  console.error(err),
);
