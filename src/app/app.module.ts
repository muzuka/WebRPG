import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';           // for ngModel
import { MonacoEditorModule }    from '@materia-ui/ngx-monaco-editor';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot()  // initializes the loader
  ],
  /* … declarations, bootstrap, etc. … */
})
export class AppModule { }