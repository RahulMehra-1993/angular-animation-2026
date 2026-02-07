import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-animation-1',
  imports: [CommonModule],
  templateUrl: './animation-1.html',
  styleUrl: './animation-1.css',
  standalone: true
})
export class Animation1 {
  options:number[]=[1,2,3,4,5,6]

  // positive naming = readable logic
  isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }

  closeSidebar() {
    this.isSidebarOpen.set(true);
    console.log('Sidebar closed');
  }

}
