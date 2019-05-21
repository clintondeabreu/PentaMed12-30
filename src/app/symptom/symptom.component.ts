import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.scss']
})
export class SymptomComponent implements OnInit {

  symptoms: Object;
  symptomtypes: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSymptom().subscribe(data => {
      this.symptoms = data
      console.log(this.symptoms);
    }
    );
    this.data.getSymptomType().subscribe(data => {
      this.symptomtypes = data
      console.log(this.symptomtypes);
    }
    );
  }

}
