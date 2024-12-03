import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; // Ensure this is imported
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-income-dialog',
  templateUrl: './add-income-dialog.component.html',
  styleUrls: ['./add-income-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule, // Ensure this is imported
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ]
})
export class AddIncomeDialogComponent {
  incomeSource = {
    source: '',
    amount: 0,
    date: new Date(),
    category: '',
    recurring: false
  };

  constructor(public dialogRef: MatDialogRef<AddIncomeDialogComponent>) {}

  onSave() {
    this.dialogRef.close(this.incomeSource);
  }

  onCancel() {
    this.dialogRef.close();
  }
}