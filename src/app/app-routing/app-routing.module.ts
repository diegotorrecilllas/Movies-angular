import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import { FilmListComponent} from '../film-list/film-list.component';
import { SeriesListComponent} from '../series-list/series-list.component';
import { AboutUsComponent} from '../about-us/about-us.component';
import { NotFoundComponent} from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
const routes: Routes = [
  {
   path: '',
   component: HomeComponent,
  },{
  path: 'FilmList',
  component: FilmListComponent,
},{
  path: 'SeriesList',
  component: SeriesListComponent,
},{
  path: 'AboutUs',
  component: AboutUsComponent,
},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
