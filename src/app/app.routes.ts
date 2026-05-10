import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component')
        .then(m => m.LayoutComponent),

    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard-page/dashboard-page.component')
            .then(m => m.DashboardPageComponent)
      },

      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users-page/users-page.component')
            .then(m => m.UsersPageComponent)
      },

      {
        path: 'users/:id',
        loadComponent: () =>
          import('./pages/user-details-page/user-details-page.component')
            .then(m => m.UserDetailsPageComponent)
      }

    ]
  }

];