import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { DateAngajareService } from '../services/date-angajare.service';
import { DateAngajareModel } from '../models/dateAngajare';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import { MatDialog } from '@angular/material/dialog';
import { NgFor } from '@angular/common';
import { AdaugaDateAngajareComponent } from '../adauga-date-angajare/adauga-date-angajare.component';

@Component({
  selector: 'app-date-angajare',
  standalone: true,
  imports: [NgFor,MatButtonModule, MatTableModule, MatPaginatorModule, MatPaginator, MatIconModule],
  templateUrl: './date-angajare.component.html',
  styleUrls: ['./date-angajare.component.css']
})

export class DateAngajareComponent implements AfterViewInit{

  displayedColumns: string[] = ['Marca', 'DataAngajare', 'Departament', 'Functie', 'Actions'];
  dataSource = new MatTableDataSource<DateAngajareModel>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private dateAngajareService: DateAngajareService,  public dialog: MatDialog){
    this.dateAngajareService.getDateAngajare().subscribe(res => {
      this.dataSource = new MatTableDataSource<DateAngajareModel>(res.map((dateAngajare:any) =>{
        return{
        marca: dateAngajare.marca,
        dataAngajare: dateAngajare.dataAngajare,
        departament: dateAngajare.departament,
        functie: dateAngajare.functie
        }
      }));
      })
     
       }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     
  }

   openDialog(dateAngajare?: DateAngajareModel): void{
      const dialogRef = this.dialog.open(AdaugaDateAngajareComponent, {
        width: '500px',
        backdropClass: 'custom-dialog-backdrop-class',
        panelClass: 'custom-dialog-panel-class',
        data: dateAngajare
      });
  
      dialogRef.afterClosed().subscribe(res=>{
        console.log(res)
        if(res.event === 'add'){
            this.dateAngajareService.addDateAngajare(res.data).subscribe();
            location.reload();
             } else if (res.event === 'update'){
            if (dateAngajare){
             this.dateAngajareService.updateDateAngajare(dateAngajare.marca, res.data).subscribe();
            }
            location.reload();
        }
       }
       )
    }

    deleteDateAngajare(marca: number): void{
      this.dateAngajareService.deleteDateAngajare(marca).subscribe(res=>{
        console.log(res);
        location.reload();
      });
    }
  }

