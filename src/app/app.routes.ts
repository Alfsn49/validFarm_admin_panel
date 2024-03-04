import { Routes } from '@angular/router';
import { verificacionGuardGuard } from './guard/verificacion-guard.guard';
import { comprobacionTokenGuard } from './guard/comprobacion-token.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent() {
      return import('./components/ui/layout/layout.component').then(
        (m) => m.LayoutComponent
      );
    },
    children: [
      {
        path:'dashboardAdmin',
        loadComponent() {
            return import('./components/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent);
        }
      },{
        path: 'principal',
        loadComponent() {
          return import(
            './components/contenido/principal/principal.component'
          ).then((m) => m.PrincipalComponent);
        },
      },
      {
        path: 'enfermedades',
        loadComponent() {
          return import(
            './components/contenido/enfermedad/enfermedad.component'
          ).then((m) => m.EnfermedadComponent);
        },
      },
      {
        path:'addEnfermedad',
        loadComponent(){
          return import(
            './components/contenido/agregar-enfermedad/agregar-enfermedad.component'
          ).then((m) => m.AgregarEnfermedadComponent);
        }
      },{
        path: 'agregar-medicina',
        loadComponent() {
          return import(
            './components/contenido/agregar-medicina/agregar-medicina.component'
          ).then((m) => m.AgregarMedicinaComponent);
        },
      },{
        path: 'agregar-age-group',
        loadComponent() {
          return import(
            './components/contenido/agregar-grupo-etaero/agregar-grupo-etaero.component'
          ).then((m) => m.AgregarGrupoEtaeroComponent);
        },
      }
    ],
    canActivate: [comprobacionTokenGuard],
  },
  {
    path: 'dashboardAdmin',
    loadComponent() {
      return import(
        './components/admin-dashboard/admin-dashboard.component'
      ).then((m) => m.AdminDashboardComponent);
    },
    children: [
      {
        path: 'principal',
        loadComponent() {
          return import(
            './components/contenido/principal/principal.component'
          ).then((m) => m.PrincipalComponent);
        },
      },
      {
        path: 'enfermedades',
        loadComponent() {
          return import(
            './components/contenido/enfermedad/enfermedad.component'
          ).then((m) => m.EnfermedadComponent);
        },
      },
    ],
  },
  {
    path: 'login',
    loadComponent() {
      return import('./components/Auth/login-admin/login-admin.component').then(
        (m) => m.LoginAdminComponent
      );
    },
  },
  {
    path: 'agregar-medicina',
    loadComponent() {
      return import(
        './components/contenido/agregar-medicina/agregar-medicina.component'
      ).then((m) => m.AgregarMedicinaComponent);
    },
  },
  {
    path: 'agregar-age-group',
    loadComponent() {
      return import(
        './components/contenido/agregar-grupo-etaero/agregar-grupo-etaero.component'
      ).then((m) => m.AgregarGrupoEtaeroComponent);
    },
  },
  {
    path: 'register',
    loadComponent() {
      return import(
        './components/Auth/registre-admin/registre-admin.component'
      ).then((m) => m.RegistreAdminComponent);
    },
  },
  {
    path: 'verificacion',
    loadComponent() {
      return import(
        './components/Auth/verificacion-admin/verificacion-admin.component'
      ).then((m) => m.VerificacionAdminComponent);
    },
    canActivate: [verificacionGuardGuard],
    data: {
      rol: 'admin',
    },
  },
];
