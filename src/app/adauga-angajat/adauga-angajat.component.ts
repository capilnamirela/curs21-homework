import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { DateAngajatiModel } from '../models/dateAngajati';

@Component({
  selector: 'app-adauga-angajat',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './adauga-angajat.component.html',
  styleUrl: './adauga-angajat.component.css'
})
export class AdaugaAngajatComponent {
  adaugaAngajat = new FormGroup({
    marca: new FormControl('', Validators.required),  
     nume: new FormControl('', Validators.required),
     prenume: new FormControl('', Validators.required),  
     cnp: new FormControl('', Validators.required),
     adresa: new FormControl('', Validators.required),
  });
  
  currentAngajat : DateAngajatiModel;

  constructor(
    public dialogRef: MatDialogRef<AdaugaAngajatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
    this.currentAngajat = data;
  }

  ngOnInit():void{
    if(this.currentAngajat){
      this.adaugaAngajat.controls.nume.setValue(this.currentAngajat.nume);
      this.adaugaAngajat.controls.prenume.setValue(this.currentAngajat.prenume);
      this.adaugaAngajat.controls.cnp.setValue(this.currentAngajat.cnp);
      this.adaugaAngajat.controls.adresa.setValue(this.currentAngajat.adresa);
      }
  }


  onSubmit(){
    const angajatNou = {
      marca: this.adaugaAngajat.controls.marca.getRawValue(),
      nume: this.adaugaAngajat.controls.nume.getRawValue(),
      prenume: this.adaugaAngajat.controls.prenume.getRawValue(),
      cnp: this.adaugaAngajat.controls.cnp.getRawValue(),
      adresa: this.adaugaAngajat.controls.adresa.getRawValue(),
    }

  
    console.log(angajatNou);
    if(this.currentAngajat){
      this.dialogRef.close({
        event:"update",
        data:angajatNou 
    })
    } else {
      this.dialogRef.close({
        event:"add",
        data:angajatNou
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
