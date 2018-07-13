
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ReportingComponent } from './reporting/reporting.component';
import { LoginComponent } from './login/login.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { ProductionDetailsComponent } from './production-details/production-details.component';


export const router: Routes = [

    { path: '', component: LoginComponent },
    { path: 'userManagement', component: UserManagementComponent },
    { path: 'dataEntry', component: DataEntryComponent },
    { path: 'reporting', component: ReportingComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'memberDetail', component: MemberDetailComponent },
    { path: 'productionDetails', component: ProductionDetailsComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});

