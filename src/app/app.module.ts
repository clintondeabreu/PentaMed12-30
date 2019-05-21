import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RiskfactorComponent } from './riskfactor/riskfactor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SymptomComponent } from './symptom/symptom.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { MedicationComponent } from './medication/medication.component';
import { IllnesstypeComponent } from './illnesstype/illnesstype.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RiskfactorComponent,
    MainNavComponent,
    SymptomComponent,
    TreatmentComponent,
    MedicationComponent,
    IllnesstypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
