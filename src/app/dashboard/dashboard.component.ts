import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ChartModule, BadgeModule, AvatarModule, ButtonModule, RippleModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Stat cards
  capacity = signal(150);
  revenue = signal(1345);
  errors = signal(23);
  followers = signal(4587);

  // Area chart (stacked)
  areaData = signal<any>({
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],
    datasets: [
      {
        label: 'Mobile',
        type: 'line',
        data: [20,30,45,52,68,75,82,95,110,123],
        fill: true,
        tension: 0.35,
        backgroundColor: 'rgba(79, 193, 120, 0.25)',
        borderColor: 'rgba(79, 193, 120, 1)',
        pointRadius: 0,
        stack: 'total'
      },
      {
        label: 'Web',
        type: 'line',
        data: [60,85,120,110,130,155,165,158,171,175],
        fill: true,
        tension: 0.35,
        backgroundColor: 'rgba(255, 122, 89, 0.35)',
        borderColor: 'rgba(255, 122, 89, 1)',
        pointRadius: 0,
        stack: 'total'
      },
      {
        label: 'API',
        type: 'line',
        data: [120,140,150,160,175,190,205,230,240,245],
        fill: true,
        tension: 0.35,
        backgroundColor: 'rgba(255, 193, 7, 0.35)',
        borderColor: 'rgba(255, 193, 7, 1)',
        pointRadius: 0,
        stack: 'total'
      }
    ]
  });

  areaOptions = computed(() => ({
    maintainAspectRatio: false,
    responsive: true,
    interaction: { intersect: false, mode: 'index' as const },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#64748b' }
      },
      y: {
        stacked: true,
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: { color: '#94a3b8' }
      }
    }
  }));

  // Pie
  pieData = signal<any>({
    labels: ['Campaign A','Campaign B','Campaign C','Organic'],
    datasets: [
      { data: [38, 22, 14, 26], backgroundColor: ['#60a5fa','#34d399','#fbbf24','#cbd5e1'] }
    ]
  });

  pieOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' as const } } };

  // Line (AAPL)
  lineData = signal<any>({
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],
    datasets: [
      {
        label: 'AAPL',
        data: [120,125,132,128,138,150,155,160,172,190],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Index',
        data: [100,104,110,112,118,124,130,139,150,165],
        borderWidth: 2,
        fill: false
      }
    ]
  });

  lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' as const } },
    scales: {
      x: { grid: { display: false }},
      y: { grid: { color: 'rgba(0,0,0,0.05)' }}
    }
  };
}