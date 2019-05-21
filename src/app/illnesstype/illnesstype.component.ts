import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-illnesstype',
  templateUrl: './illnesstype.component.html',
  styleUrls: ['./illnesstype.component.scss']
})
export class IllnesstypeComponent implements OnInit {

  types: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIllnessType().subscribe(data => {
      this.types = data
      console.log(this.types);
    }
  );
  }

}
