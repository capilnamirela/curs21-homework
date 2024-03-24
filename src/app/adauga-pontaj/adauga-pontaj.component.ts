import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { PontajModel } from '../models/pontaj';

@Component({
  selector: 'app-pontaj',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './adauga-pontaj.component.html',
  styleUrl: './adauga-pontaj.component.css'
})
export class AdaugaPontajComponent {
  adaugaPontaj = new FormGroup({
    marca: new FormControl('', Validators.required),  
     zileLucratoare: new FormControl('', Validators.required),
     zileLucrate: new FormControl('', Validators.required),  
     zileCO: new FormControl('', Validators.required),
     zileCFS: new FormControl('', Validators.required),
     });
  
  currentPontaj : PontajModel;

  constructor(
    public dialogRef: MatDialogRef<AdaugaPontajComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
    this.currentPontaj = data;
  }

  ngOnInit():void{
    if(this.currentPontaj){
      this.adaugaPontaj.controls.zileLucratoare.setValue(this.currentPontaj.zileLucratoare.toString());
      this.adaugaPontaj.controls.zileLucrate.setValue(this.currentPontaj.zileLucrate.toString());
      this.adaugaPontaj.controls.zileCO.setValue(this.currentPontaj.zileCO.toString());
      this.adaugaPontaj.controls.zileCFS.setValue(this.currentPontaj.zileCFS.toString());
      
  }
  }

  onSubmit(){
    const pontajNou = {
      marca: this.adaugaPontaj.controls.marca.getRawValue(),
      zileLucratoare: this.adaugaPontaj.controls.zileLucratoare.getRawValue(),
      zileLucrate: this.adaugaPontaj.controls.zileLucrate.getRawValue(),
      zileCO: this.adaugaPontaj.controls.zileCO.getRawValue(),
      zileCFS: this.adaugaPontaj.controls.zileCFS.getRawValue(),
   }

  
    console.log(pontajNou);
    if(this.currentPontaj){
      this.dialogRef.close({
        event:"update",
        data:pontajNou 
    })
    } else {
      this.dialogRef.close({
        event:"add",
        data:pontajNou
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

