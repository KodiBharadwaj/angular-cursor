import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from '../income/income.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IncomeComponent
  ]
})
export class DashboardComponent {
  activeSection: string = 'overview';

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}