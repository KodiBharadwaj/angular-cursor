import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

interface IncomeSource {
  id: number;
  source: string;
  amount: number;
  date: string;
  category: string;
  recurring: boolean;
}

interface AddIncomeDialogResult {
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
  imports: [CommonModule, MatDialogModule]
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
    
  }
}