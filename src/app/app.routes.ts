import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((module) => module.Home),
  },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./pages/vehicle-catalog/vehicle-catalog').then(
        (module) => module.VehicleCatalog,
      ),
  },
  {
    path: 'programa',
    loadComponent: () =>
      import('./pages/program/program').then((module) => module.Program),
  },
  {
    path: 'inscripcion',
    loadComponent: () =>
      import('./pages/registration/registration').then(
        (module) => module.Registration,
      ),
  },
  {
    path: 'guia-estilo',
    loadComponent: () =>
      import('./pages/style-guide/style-guide').then(
        (module) => module.StyleGuide,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(
        (module) => module.NotFound,
      ),
  },
];
