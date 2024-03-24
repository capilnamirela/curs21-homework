import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router'; 
import { PontajModel } from '../models/pontaj';
import { PontajService } from '../services/pontaj.service';
import { AdaugaPontajComponent } from '../adauga-pontaj/adauga-pontaj.component';

@Component({
  selector: 'app-pontaj',
  standalone: true,
  imports: [NgFor,MatButtonModule, MatTableModule, MatPaginatorModule, MatPaginator, MatIconModule, RouterLink, RouterModule],
  templateUrl: './pontaj.component.html',
  styleUrls: ['./pontaj.component.css']
})

export class PontajComponent implements AfterViewInit{

  displayedColumns: string[] = ['Marca', 'ZileLucratoare', 'ZileLucrate', 'ZileCO', 'ZileCFS', 'Actions'];
  dataSource = new MatTableDataSource<PontajModel>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private pontajService: PontajService,  public dialog: MatDialog){
    this.pontajService.getPontaj().subscribe(res => {
      this.dataSource = new MatTableDataSource<PontajModel>(res.map((pontaj:any) =>{
        return{
        marca: pontaj.marca,
        zileLucratoare: pontaj.zileLucratoare,
        zileLucrate: pontaj.zileLucrate,
        zileCO: pontaj.zileCO,
        zileCFS: pontaj.zileCFS
        }
      }));
      })
     
       }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     
  }

   openDialog(pontaj?: PontajModel): void{
      const dialogRef = this.dialog.open(AdaugaPontajComponent, {
        width: '500px',
        backdropClass: 'custom-dialog-backdrop-class',
        panelClass: 'custom-dialog-panel-class',
        data: pontaj
      });
  
      dialogRef.afterClosed().subscribe(res=>{
        console.log(res)
        if(res.event === 'add'){
            this.pontajService.addPontaj(res.data).subscribe();
            location.reload();
             } else if (res.event === 'update'){
            if (pontaj){
             this.pontajService.updatePontaj(pontaj.marca, res.data).subscribe();
            }
            location.reload();
        }
       }
       )
    }

   

    deletePontaj(marca: number): void{
      this.pontajService.deletePontaj(marca).subscribe(res=>{
        console.log(res);
        location.reload();
      });
    }
  }

