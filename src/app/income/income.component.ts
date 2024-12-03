import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddIncomeDialogComponent } from '../add-income-dialog/add-income-dialog.component';

interface IncomeSource {
  id: number;
  source: string;
  amount: number;
  date: string;
  category: string;
  recurring: boolean;
}

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    AddIncomeDialogComponent
  ]
})
export class IncomeComponent {
  totalIncome: number = 0;
  incomeSources: IncomeSource[] = [];
  loading: boolean = false;

  constructor(
    public httpClient: HttpClient,
    private dialog: MatDialog
  ) {}

  baseUrl = "http://localhost:8100";
  
  ngOnInit() {
    this.loadIncomeData();
  }

  loadIncomeData() {
    this.loading = true;

    this.httpClient.get<IncomeSource[]>(`${this.baseUrl}/api/income/1`).subscribe({
      next: (data) => {
        this.incomeSources = data;
        this.calculateTotalIncome();
      },
      error: (error) => {
        console.error('Failed to load income data:', error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  calculateTotalIncome() {
    this.totalIncome = this.incomeSources.reduce((sum, source) => sum + source.amount, 0);
  }

  addIncome() {
    const dialogRef = this.dialog.open(AddIncomeDialogComponent, {
      width: '500px',
      panelClass: 'income-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.incomeSources.push(result);
        this.calculateTotalIncome();
      }
    });
  }
}