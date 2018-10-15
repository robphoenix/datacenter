import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricComponent } from './metric/metric.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NodesDetailComponent } from './nodes-detail/nodes-detail.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';
import { NodesComponent } from './nodes/nodes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    NodesDetailComponent,
    AlertComponent
  ],
  imports: [BrowserModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [NodesDetailComponent, AlertComponent]
})
export class AppModule {}
