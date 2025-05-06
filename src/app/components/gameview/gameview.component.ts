import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'game-view',
  imports: [HeaderComponent],
  templateUrl: `./gameview.component.html`,
  styleUrls: ['./gameview.component.css'],
})
export class GameViewComponent implements AfterViewInit, OnDestroy {
  @ViewChild('gameContainer', {static: true}) gameContainer!: ElementRef<HTMLDivElement>;

  private app!: PIXI.Application;

  ngAfterViewInit(): void {
    
  }

  private renderGame(data: any) {
    
  }

  ngOnDestroy(): void {
    
  }
}