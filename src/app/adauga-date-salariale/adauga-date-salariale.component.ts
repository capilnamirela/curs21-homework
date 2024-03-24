import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { DateSalarialeModel } from '../models/dateSalariale';

@Component({
  selector: 'app-adauga-date-salariale',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './adauga-date-salariale.component.html',
  styleUrl: './adauga-date-salariale.component.css'
})
export class AdaugaDateSalarialeComponent {
  adaugaDateSalariale = new FormGroup({
    marca: new FormControl('', Validators.required),  
     salariuIncadrare: new FormControl('', Validators.required),
     alteDrepturi: new FormControl('', Validators.required),  
     ticheteMasa: new FormControl('', Validators.required),
     });
  
  currentDateSalariale : DateSalarialeModel;

  constructor(
    public dialogRef: MatDialogRef<AdaugaDateSalarialeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
    this.currentDateSalariale = data;
  }

  ngOnInit():void{
    if(this.currentDateSalariale){
      this.adaugaDateSalariale.controls.salariuIncadrare.setValue(this.currentDateSalariale.salariuIncadrare.toString());
      this.adaugaDateSalariale.controls.alteDrepturi.setValue(this.currentDateSalariale.alteDrepturi.toString());
      this.adaugaDateSalariale.controls.ticheteMasa.setValue(this.currentDateSalariale.ticheteMasa.toString());
      
  }
  }

  onSubmit(){
    const salariuNou = {
      marca: this.adaugaDateSalariale.controls.marca.getRawValue(),
      salariuIncadrare: this.adaugaDateSalariale.controls.salariuIncadrare.getRawValue(),
      alteDrepturi: this.adaugaDateSalariale.controls.alteDrepturi.getRawValue(),
      ticheteMasa: this.adaugaDateSalariale.controls.ticheteMasa.getRawValue(),
   }

  
    console.log(salariuNou);
    if(this.currentDateSalariale){
      this.dialogRef.close({
        event:"update",
        data:salariuNou 
    })
    } else {
      this.dialogRef.close({
        event:"add",
        data:salariuNou
       }) 
    }
   
  }

  close():void{
    console.log("Cancel")
    this.dialogRef.close({
      event:"cancel"
     });
  }


}

