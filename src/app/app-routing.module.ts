import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RiskfactorComponent} from './riskfactor/riskfactor.component';
import {SymptomComponent} from './symptom/symptom.component';
import {TreatmentComponent} from './treatment/treatment.component';
import {MedicationComponent} from './medication/medication.component';
import {IllnesstypeComponent} from './illnesstype/illnesstype.component';

const routes: Routes = [
  {path : '', component: RiskfactorComponent},
  { path: 'symptom', component: SymptomComponent },
  { path: 'treatment', component: TreatmentComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'type', component: IllnesstypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
