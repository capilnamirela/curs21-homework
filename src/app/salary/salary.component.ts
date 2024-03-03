import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../services/salary.service';
import { SalaryDatePersonale } from '../models/salary.datePersonale';
import { NgFor } from '@angular/common';
import { SalaryDateAngajareUnitate } from '../models/salary.dateAngajareUnitate';

@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent implements OnInit{

  salariesDatePersonale: SalaryDatePersonale[] = [];
  SalaryDatePersonale: any;

  salariesDateAngajareUnitate : SalaryDateAngajareUnitate[] = [];
  SalaryDateAngajareUnitate: any;

  constructor(private salaryService: SalaryService){}
 
  ngOnInit(): void {
    this.salaryService.getDatePersonale().subscribe(res => {
      this.salariesDatePersonale = res.map((salaryDatePersonale:any) =>{
      return {
        marca: salaryDatePersonale.marca,
        nume: salaryDatePersonale.nume,
        prenume: salaryDatePersonale.prenume,
        cnp: salaryDatePersonale.cnp,
        adresa: salaryDatePersonale.adresa
      };
      });
    });


    this.salaryService.getDateAngajareUnitate().subscribe(res => {
        this.salariesDateAngajareUnitate = res.map((salaryDateAngajareUnitate:any) =>{
        return {
          marca: salaryDateAngajareUnitate.marca,
          dataAngajariiUnitate: salaryDateAngajareUnitate.dataAngajariiUnitate,
          departament: salaryDateAngajareUnitate.departament,
          functie: salaryDateAngajareUnitate.functie
        };
        });
      });
    
    }

    

}
