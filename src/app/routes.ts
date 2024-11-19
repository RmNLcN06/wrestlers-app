import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsWrestlerComponent } from "./details-wrestler/details-wrestler.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'details/:id',
        component: DetailsWrestlerComponent,
        title: 'Wrestler details',
    },
];

export default routeConfig;