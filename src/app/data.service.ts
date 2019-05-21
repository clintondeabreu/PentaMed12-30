import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRiskFactors() {
    return this.http.get('http://localhost:65076/api/RiskFactor/getRiskFactors')
  }
  getRiskFactorTypes() {
    return this.http.get('http://localhost:65076/api/RiskFactorType/getRiskFactorType')
  }
  getAdditionalInfo() {
    return this.http.get('http://localhost:65076/api/AdditionalInfo/getAdditionalInfo')
  }
  getIllnessType() {
    return this.http.get('http://localhost:65076/api/IllnessType/getIllnessType')
  }
  getMedication() {
    return this.http.get('http://localhost:65076/api/Medication/getMedication')
  }
  getMedicationType() {
    return this.http.get('http://localhost:65076/api/Medication/getMedicationType')
  }
  getSymptom() {
    return this.http.get('http://localhost:65076/api/Symptom/getSymptoms')
  }
  getSymptomType() {
    return this.http.get('http://localhost:65076/api/SymptomType/getSymptomTypes')
  }
  getTreatment() {
    return this.http.get('http://localhost:65076/api/Treatment/getTreatments')
  }
  getTreatmentType() {
    return this.http.get('http://localhost:65076/api/TreatmentType/getTreatmentTypes')
  }
}
