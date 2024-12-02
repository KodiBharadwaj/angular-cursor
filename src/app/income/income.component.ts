import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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

  ngOnInit() {
    // Simulate API call
    this.loadIncomeData();
  }

  loadIncomeData() {
    this.loading = true;
    // Simulated data - replace with actual API call
    this.incomeSources = [
      { id: 1, source: 'Salary', amount: 5000, date: '2024-03-01', category: 'Employment', recurring: true },
      { id: 2, source: 'Freelance', amount: 1200, date: '2024-03-15', category: 'Self-employed', recurring: false },
      { id: 3, source: 'Investments', amount: 500, date: '2024-03-20', category: 'Passive', recurring: true },
    ];
    this.calculateTotalIncome();
    this.loading = false;
  }

  calculateTotalIncome() {
    this.totalIncome = this.incomeSources.reduce((sum, source) => sum + source.amount, 0);
  }

  addIncome() {
    // Implement add income logic
    console.log('Add income clicked');
  }
}