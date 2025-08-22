import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    {
        path: "",
        component:MainComponent
    },
    {
        path:"login",
        component: FormComponent
    }
];
