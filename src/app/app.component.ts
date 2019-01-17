import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from '../_models/medical-record';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fullMedicalRecords = [];
  medicalRecords = [];
  medicalRecord:MedicalRecord;

  onlyMinors: boolean = false;

  ngOnInit() {
    this.medicalRecord = new MedicalRecord();
  }

  onSave() {
    this.fullMedicalRecords.push(this.medicalRecord);
    
    if (this.onlyMinors) {
      if (this.medicalRecord.age < 18) {
        this.medicalRecords.push(this.medicalRecord);
      }
    } else {
      this.medicalRecords.push(this.medicalRecord);
    }
    
    this.medicalRecord = new MedicalRecord();
  }

  filterMinors() {
    if (this.onlyMinors) {
      
      this.medicalRecords = this.fullMedicalRecords.filter(record => {
        if (record.age < 18) {
          return record;
        }
      });
    } else {
      this.medicalRecords = this.fullMedicalRecords;
    }
  }
}
