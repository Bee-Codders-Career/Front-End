import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { CandidatComponent } from './candidat/candidat.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashadminComponent } from './admin/dashadmin/dashadmin.component';
import { DashagentComponent } from './agent/dashagent/dashagent.component';
import { CandidatdashComponent } from './candidat/candidatdash/candidatdash.component';
import { ProfilcandidatComponent } from './candidat/profilcandidat/profilcandidat.component';
import { MyapplicationscandidatComponent } from './candidat/myapplicationscandidat/myapplicationscandidat.component';
import { MyinterviwscandidatComponent } from './candidat/myinterviwscandidat/myinterviwscandidat.component';
import { ComponentscandidatComponent } from './candidat/componentscandidat/componentscandidat.component';
import { SidebarcandidatComponent } from './candidat/componentscandidat/sidebarcandidat/sidebarcandidat.component';
import { NavbarcandidatComponent } from './candidat/componentscandidat/navbarcandidat/navbarcandidat.component';
import { ComponentsadminComponent } from './admin/componentsadmin/componentsadmin.component';
import { ProfiladminComponent } from './admin/profiladmin/profiladmin.component';
import { UserlistadminComponent } from './admin/userlistadmin/userlistadmin.component';
import { NavbaradminComponent } from './admin/componentsadmin/navbaradmin/navbaradmin.component';
import { SidebaradminComponent } from './admin/componentsadmin/sidebaradmin/sidebaradmin.component';
import { ProfilagentComponent } from './agent/profilagent/profilagent.component';
import { OfferslistagentComponent } from './agent/offerslistagent/offerslistagent.component';
import { ApplicationslistagentComponent } from './agent/applicationslistagent/applicationslistagent.component';
import { InterviwslistagentComponent } from './agent/interviwslistagent/interviwslistagent.component';
import { ComponentsagentComponent } from './agent/componentsagent/componentsagent.component';
import { NavbaragentComponent } from './agent/componentsagent/navbaragent/navbaragent.component';
import { SidebaragentComponent } from './agent/componentsagent/sidebaragent/sidebaragent.component';
import { EdtprofilComponent } from './candidat/profilcandidat/edtprofil/edtprofil.component';
import { AddofferComponent } from './agent/offerslistagent/addoffer/addoffer.component';
import { EditofferComponent } from './agent/offerslistagent/editoffer/editoffer.component';
import { EditinterviewComponent } from './agent/interviwslistagent/editinterview/editinterview.component';
import { CandidatedetailsComponent } from './agent/applicationslistagent/candidatedetails/candidatedetails.component';
import { AddinterviewComponent } from './agent/applicationslistagent/addinterview/addinterview.component';
import { AdduserComponent } from './admin/userlistadmin/adduser/adduser.component';
import { AddmanagerComponent } from './admin/userlistadmin/addmanager/addmanager.component';
import { EdituserComponent } from './admin/userlistadmin/edituser/edituser.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    AdminComponent,
    AgentComponent,
    CandidatComponent,
    HomeComponent,
    DashadminComponent,
    DashagentComponent,
    CandidatdashComponent,
    ProfilcandidatComponent,
    MyapplicationscandidatComponent,
    MyinterviwscandidatComponent,
    ComponentscandidatComponent,
    SidebarcandidatComponent,
    NavbarcandidatComponent,
    ComponentsadminComponent,
    ProfiladminComponent,
    UserlistadminComponent,
    NavbaradminComponent,
    SidebaradminComponent,
    ProfilagentComponent,
    OfferslistagentComponent,
    ApplicationslistagentComponent,
    InterviwslistagentComponent,
    ComponentsagentComponent,
    NavbaragentComponent,
    SidebaragentComponent,
    EdtprofilComponent,
    AddofferComponent,
    EditofferComponent,
    EditinterviewComponent,
    CandidatedetailsComponent,
    AddinterviewComponent,
    AdduserComponent,
    AddmanagerComponent,
    EdituserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
