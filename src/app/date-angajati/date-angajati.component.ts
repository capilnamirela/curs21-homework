import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { DateAngajatiService } from '../services/date-angajati.service';
import { DateAngajatiModel } from '../models/dateAngajati';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AdaugaAngajatComponent } from '../adauga-angajat/adauga-angajat.component';
import { MatDialog } from '@angular/material/dialog';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-date-angajati',
  standalone: true,
  imports: [NgFor,MatButtonModule, MatTableModule, MatPaginatorModule, MatPaginator, MatIconModule],
  templateUrl: './date-angajati.component.html',
  styleUrls: ['./date-angajati.component.css']
})

export class DateAngajatiComponent implements AfterViewInit{

  displayedColumns: string[] = ['Marca', 'Nume', 'Prenume', 'CNP', 'Adresa', 'Actions'];
  dataSource = new MatTableDataSource<DateAngajatiModel>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private dateAngajatiService: DateAngajatiService,  public dialog: MatDialog){
    this.dateAngajatiService.getDatePersonaleAngajati().subscribe(res => {
      this.dataSource = new MatTableDataSource<DateAngajatiModel>(res.map((dateAngajati:any) =>{
        return{
        marca: dateAngajati.marca,
        nume: dateAngajati.nume,
        prenume: dateAngajati.prenume,
        cnp: dateAngajati.cnp,
        adresa: dateAngajati.adresa
        }
      }));
      })
     
       }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     
  }

   openDialog(dateAngajati?: DateAngajatiModel): void{
      const dialogRef = this.dialog.open(AdaugaAngajatComponent, {
        width: '500px',
        backdropClass: 'custom-dialog-backdrop-class',
        panelClass: 'custom-dialog-panel-class',
        data: dateAngajati
      });
  
      dialogRef.afterClosed().subscribe(res=>{
        console.log(res)
        if(res.event === 'add'){
            this.dateAngajatiService.addDatePersonaleAngajat(res.data).subscribe();
            location.reload();
             } else if (res.event === 'update'){
            if (dateAngajati){
             this.dateAngajatiService.updateDateAngajati(dateAngajati.marca, res.data).subscribe();
            }
            location.reload();
        }
       }
       )
    }

    deleteAngajat(marca: number): void{
      this.dateAngajatiService.deleteAngajat(marca).subscribe(res=>{
        console.log(res);
        location.reload();
      });
    }
  }

