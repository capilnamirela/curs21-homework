import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { DateAngajareModel } from '../models/dateAngajare';

@Component({
  selector: 'app-adauga-date-angajare',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './adauga-date-angajare.component.html',
  styleUrl: './adauga-date-angajare.component.css'
})
export class AdaugaDateAngajareComponent {
  [x: string]: any;
  adaugaDateAngajare = new FormGroup({
     marca: new FormControl('', Validators.required),  
     dataAngajare: new FormControl('', Validators.required),
     departament: new FormControl('', Validators.required),  
     functie: new FormControl('', Validators.required),
  });
  
  currentDateAngajare : DateAngajareModel;

  constructor(
    public dialogRef: MatDialogRef<AdaugaDateAngajareComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
    this.currentDateAngajare = data;
  }

  ngOnInit():void{
    if(this.currentDateAngajare){
      this.adaugaDateAngajare.controls.dataAngajare.setValue(this.currentDateAngajare.dataAngajare);
      this.adaugaDateAngajare.controls.departament.setValue(this.currentDateAngajare.departament);
      this.adaugaDateAngajare.controls.functie.setValue(this.currentDateAngajare.functie);
     }
  }


  onSubmit(){
    const dateAngajareNoi = {
      marca: this.adaugaDateAngajare.controls.marca.getRawValue(),
      dataAngajare: this.adaugaDateAngajare.controls.dataAngajare.getRawValue(),
      departament: this.adaugaDateAngajare.controls.departament.getRawValue(),
      functie: this.adaugaDateAngajare.controls.functie.getRawValue(),
    }

  
    console.log(dateAngajareNoi);
    if(this.currentDateAngajare){
      this.dialogRef.close({
        event:"update",
        data:dateAngajareNoi 
    })
    } else {
      this.dialogRef.close({
        event:"add",
        data:dateAngajareNoi
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
