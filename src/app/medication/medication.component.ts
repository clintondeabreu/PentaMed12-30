import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {
  medications: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMedication().subscribe(data => {
      this.medications = data
      console.log(this.medications);
    }
  );
  }

}
