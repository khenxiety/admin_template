import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  events: string[] = [];
  opened: boolean = true;

  @ViewChild(MatSidenav)
  SideNav!: MatSidenav;


  title = 'test_project';
  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1040px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.SideNav.mode = 'over';
          this.SideNav.close();
        } else {
          this.SideNav.mode = 'side';
          this.SideNav.open();
        }
      });
  }
  
}
