import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { DateSalarialeService } from '../services/date-salariale.service';
import { DateSalarialeModel } from '../models/dateSalariale';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AdaugaDateSalarialeComponent } from '../adauga-date-salariale/adauga-date-salariale.component';
import { MatDialog } from '@angular/material/dialog';
import { NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-date-salariale',
  standalone: true,
  imports: [NgFor,MatButtonModule, MatTableModule, MatPaginatorModule, MatPaginator, MatIconModule, RouterLink, RouterModule],
  templateUrl: './date-salariale.component.html',
  styleUrls: ['./date-salariale.component.css']
})

export class DateSalarialeComponent implements AfterViewInit{

  displayedColumns: string[] = ['Marca', 'SalariuIncadrare', 'AlteDrepturi', 'TicheteMasa','Actions'];
  dataSource = new MatTableDataSource<DateSalarialeModel>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private dateSalarialeService: DateSalarialeService,  public dialog: MatDialog){
    this.dateSalarialeService.getDateSalariale().subscribe(res => {
      this.dataSource = new MatTableDataSource<DateSalarialeModel>(res.map((dateSalariale:any) =>{
        return{
        marca: dateSalariale.marca,
        salariuIncadrare: dateSalariale.salariuIncadrare,
        alteDrepturi: dateSalariale.alteDrepturi,
        ticheteMasa: dateSalariale.ticheteMasa
        }
      }));
      })
     
       }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     
  }

   openDialog(dateSalariale?: DateSalarialeModel): void{
      const dialogRef = this.dialog.open(AdaugaDateSalarialeComponent, {
        width: '500px',
        backdropClass: 'custom-dialog-backdrop-class',
        panelClass: 'custom-dialog-panel-class',
        data: dateSalariale
      });
  
      dialogRef.afterClosed().subscribe(res=>{
        console.log(res)
        if(res.event === 'add'){
            this.dateSalarialeService.addDateSalariale(res.data).subscribe();
            location.reload();
             } else if (res.event === 'update'){
            if (dateSalariale){
             this.dateSalarialeService.updateDateSalariale(dateSalariale.marca, res.data).subscribe();
            }
            location.reload();
        }
       }
       )
    }

   

    deleteDateSalariale(marca: number): void{
      this.dateSalarialeService.deleteDateSalariale(marca).subscribe(res=>{
        console.log(res);
        location.reload();
      });
    }
  }

