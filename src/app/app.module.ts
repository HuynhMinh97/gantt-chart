import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { PersonComponent } from './person/person.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {CardComponent} from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
@NgModule({
  declarations: [
    AppComponent,
    GanttChartComponent,
    ListPersonComponent,
    PersonComponent,
    ChildComponent,
    ParentComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
