import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// ... existing imports ..
import { Router } from '@angular/router';  // Changed from 'express' to '@angular/router'
// ... rest of the file remains the same ...

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Take Control of Your Finances</h1>
        <p>Track expenses, manage budgets, and achieve your financial goals with ease</p>
        <div class="cta-buttons">
          <button (click)="navigateTo('/signup')" class="primary-btn">Get Started Free</button>
          <button (click)="navigateTo('/features')" class="secondary-btn">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <i class="fas fa-chart-line"></i>
          <h3>Expense Tracking</h3>
          <p>Monitor your daily spending with detailed categorization</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-wallet"></i>
          <h3>Budget Management</h3>
          <p>Create and manage budgets for different spending categories</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-bullseye"></i>
          <h3>Financial Goals</h3>
          <p>Set and track progress towards your savings goals</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-coins"></i>
          <h3>Income Management</h3>
          <p>Track multiple income sources and analyze earnings</p>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Sign Up</h3>
          <p>Create your free account in minutes</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Connect Your Accounts</h3>
          <p>Securely link your financial accounts</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Track & Analyze</h3>
          <p>Start monitoring your finances</p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits">
      <h2>Why Choose Us?</h2>
      <div class="benefits-grid">
        <div class="benefit">
          <h3>Easy to Use</h3>
          <p>Intuitive interface designed for everyone</p>
        </div>
        <div class="benefit">
          <h3>Secure</h3>
          <p>Bank-level security for your data</p>
        </div>
        <div class="benefit">
          <h3>Insightful Reports</h3>
          <p>Detailed analytics and visualizations</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Take Control?</h2>
      <p>Join thousands of users who are already managing their finances better</p>
      <button (click)="navigateTo('/signup')" class="primary-btn">Start Free Trial</button>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}