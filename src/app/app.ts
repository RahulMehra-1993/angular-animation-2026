import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('angular-animation-2026');

  atHomePage() {
    return window.location.pathname === '/';
  }

  goHome() {
    window.location.href = '/';
  }
}
