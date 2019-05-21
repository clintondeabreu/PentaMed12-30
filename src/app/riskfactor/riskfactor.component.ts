import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-riskfactor',
  templateUrl: './riskfactor.component.html',
  styleUrls: ['./riskfactor.component.scss']
})
export class RiskfactorComponent implements OnInit {

  risks: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getRiskFactors().subscribe(data => {
      this.risks = data
      console.log(this.risks);
    }
  );
  }

}
