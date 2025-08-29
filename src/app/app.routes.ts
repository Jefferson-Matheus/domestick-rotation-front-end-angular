import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

export const routes: Routes = [
    {
        path: "",
        component:MainComponent
    },
    {
        path:"login",
        component: FormComponent
    },
    {
        path:"admin",
        component: AdminPanelComponent
    }
];
