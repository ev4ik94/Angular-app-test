import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  active: boolean;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      if ( val instanceof NavigationEnd ){
        const {tab} = this.activateRoute.snapshot.queryParams;
        this.active = !tab ? false : true;
      }
    });
  }

  ngOnInit(): void {
  }

  isActive(): boolean{
    return this.active;
  }

}
