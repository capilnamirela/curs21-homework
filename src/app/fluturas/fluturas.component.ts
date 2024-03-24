import { Component, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router'; 
import { FluturasService } from '../services/fluturas.service';

@Component({
  selector: 'app-fluturas',
  standalone: true,
  imports: [NgFor,MatButtonModule, MatTableModule, MatPaginatorModule, MatPaginator, MatIconModule, RouterLink, RouterModule, CommonModule],
  templateUrl: './fluturas.component.html',
  styleUrls: ['./fluturas.component.css']
})

export class FluturasComponent implements OnInit{

  fluturasi: any[];

  constructor(private fluturasService: FluturasService) { }

  ngOnInit(): void {
    this.getFluturasi();
  }

  getFluturasi(): void {
    this.fluturasService.getFluturasi()
      .subscribe(fluturasi => this.fluturasi = fluturasi);
  }
  }
