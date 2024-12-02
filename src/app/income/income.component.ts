import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  imports: [CommonModule]
})
export class IncomeComponent {
  totalIncome: number = 0;
  incomeSources: IncomeSource[] = [];
  loading: boolean = false;

  constructor(public httpClient:HttpClient){}

  baseUrl = "http://localhost:8100";
  ngOnInit() {
    // Simulate API call
    this.loadIncomeData();
  }

  loadIncomeData() {
    this.loading = true;

    this.httpClient.get<IncomeSource[]>(`${this.baseUrl}/api/income/1`).subscribe({
      next: (data) => {
        this.incomeSources = data; // Assign the data to your incomeSources array
        this.calculateTotalIncome(); // Recalculate the total income after data is loaded
      },
      error: (error) => {
        console.error('Failed to load income data:', error);
        // Optionally handle the error here
      },
      complete: () => {
        this.loading = false; // Stop the loading indicator
      }
    });
  }

  calculateTotalIncome() {
    this.totalIncome = this.incomeSources.reduce((sum, source) => sum + source.amount, 0);
  }

  addIncome() {
    this.httpClient.post
    console.log('Add income clicked');
  }
}