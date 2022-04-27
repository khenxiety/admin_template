import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  events: string[] = [];
  opened: boolean = true;

  @ViewChild(MatSidenav)
  SideNav!: MatSidenav;


  title = 'test_project';
  constructor(private observer: BreakpointObserver) {}

  
  
}
