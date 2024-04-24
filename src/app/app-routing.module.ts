import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CandidatComponent } from './candidat/candidat.component';
import { AgentComponent } from './agent/agent.component';
import { AdminComponent } from './admin/admin.component';
import { CandidatdashComponent } from './candidat/candidatdash/candidatdash.component';
import { ProfilcandidatComponent } from './candidat/profilcandidat/profilcandidat.component';
import { MyapplicationscandidatComponent } from './candidat/myapplicationscandidat/myapplicationscandidat.component';
import { MyinterviwscandidatComponent } from './candidat/myinterviwscandidat/myinterviwscandidat.component';
import { DashagentComponent } from './agent/dashagent/dashagent.component';
import { DashadminComponent } from './admin/dashadmin/dashadmin.component';
import { ComponentscandidatComponent } from './candidat/componentscandidat/componentscandidat.component';
import { SidebarcandidatComponent } from './candidat/componentscandidat/sidebarcandidat/sidebarcandidat.component';
import { NavbarcandidatComponent } from './candidat/componentscandidat/navbarcandidat/navbarcandidat.component';
import { ProfiladminComponent } from './admin/profiladmin/profiladmin.component';
import { UserlistadminComponent } from './admin/userlistadmin/userlistadmin.component';
import { ComponentsadminComponent } from './admin/componentsadmin/componentsadmin.component';
import { SidebaradminComponent } from './admin/componentsadmin/sidebaradmin/sidebaradmin.component';
import { NavbaradminComponent } from './admin/componentsadmin/navbaradmin/navbaradmin.component';
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


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},


  {path:'candidat',component:CandidatComponent},
  {path:'candidatdash',component:CandidatdashComponent},
  {path:'profilcandidat',component:ProfilcandidatComponent},
  {path:'editprofil',component:EdtprofilComponent},
  {path:'myapplicationscandidat',component:MyapplicationscandidatComponent},
  {path:'myinterviwscandidat',component:MyinterviwscandidatComponent},
  {path:'componentscandidat',component:ComponentscandidatComponent},
  {path:'sidebarcandidat',component:SidebarcandidatComponent},
  {path:'navbarcandidat',component:NavbarcandidatComponent},


  {path:'agent',component:AgentComponent},
  {path:'dashagent',component:DashagentComponent},
  {path:'profilagent',component:ProfilagentComponent},
  {path:'offerslistagent',component:OfferslistagentComponent},
  {path:'addoffer',component:AddofferComponent},
  {path:'editoffer',component:EditofferComponent},
  {path:'applicationslistagent',component:ApplicationslistagentComponent},
  {path:'candidatedetails',component:CandidatedetailsComponent},
  {path:'addinterview',component:AddinterviewComponent},
  {path:'interviwslistagent',component:InterviwslistagentComponent},
  {path:'editinterview',component:EditinterviewComponent},
  {path:'componentsagent',component:ComponentsagentComponent},
  {path:'navbaragent',component:NavbaragentComponent},
  {path:'sidebaragent',component:SidebaragentComponent},


  {path:'admin',component:AdminComponent},
  {path:'dashadmin',component:DashadminComponent},
  {path:'profiladmin',component:ProfiladminComponent},
  {path:'userlistadmin',component:UserlistadminComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'addmanager',component:AddmanagerComponent},
  {path:'edituser',component:EdituserComponent},
  {path:'componentsadmin',component:ComponentsadminComponent},
  {path:'sidebaradmin',component:SidebaradminComponent},
  {path:'navbaradmin',component:NavbaradminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
