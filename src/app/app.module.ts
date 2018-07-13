import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

/* ngx-pagination imports */
import {NgxPaginationModule} from 'ngx-pagination';


// Chart Basic Imports
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { ChartModule } from 'angular2-chartjs';
    
// Map Libraries
import * as NepalProvinces from 'fusioncharts/maps/fusioncharts.nepalprovinces';
import * as ProvinceOne from 'fusioncharts/maps/fusioncharts.nepalprovincesone';
import * as ProvinceThree from 'fusioncharts/maps/fusioncharts.nepalprovincesthree';
import * as ProvinceFour from 'fusioncharts/maps/fusioncharts.nepalprovincesfour';
import * as ProvinceFive from 'fusioncharts/maps/fusioncharts.nepalprovincesfive';
import * as ProvinceSix from 'fusioncharts/maps/fusioncharts.nepalprovincessix';

// Chart Themes
import * as CarbonTheme from 'fusioncharts/themes/fusioncharts.theme.carbon';
import * as OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportingComponent } from './reporting/reporting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductionDetailsComponent } from './production-details/production-details.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

// Module Injections
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionMaps, NepalProvinces, ProvinceOne, ProvinceThree, ProvinceFour, ProvinceFive, ProvinceSix, CarbonTheme, OceanTheme);


@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    ReportingComponent,
    DashboardComponent,
    DataEntryComponent,
    FooterComponent,
    LoginComponent,
    NavigationComponent,
    ProductionDetailsComponent,
    MemberDetailComponent,
  ],
  
  imports: [
    routes,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FusionChartsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
