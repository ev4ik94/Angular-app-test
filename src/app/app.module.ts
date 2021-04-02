import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableDataComponent } from './pages-components/navigator-components/table-data/table-data.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavigatorComponent } from './pages/navigator/navigator.component';
import { NavBarComponent } from './main-components/nav-bar/nav-bar.component';
import { HomeHeaderComponent } from './pages-components/home-components/home-header/home-header.component';
import { HomeCardGroupComponent } from './pages-components/home-components/home-card-group/home-card-group.component';

/*----Routing----*/
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'navigator', component: NavigatorComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    HomeComponent,
    NavigatorComponent,
    NavBarComponent,
    HomeHeaderComponent,
    HomeCardGroupComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
