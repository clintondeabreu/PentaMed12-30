import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {
  treatments: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTreatment().subscribe(data => {
      this.treatments = data
      console.log(this.treatments);
    }
    );
  }

}
