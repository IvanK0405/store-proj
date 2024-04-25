import { Routes } from '@angular/router';
import { CasePageComponent } from './сomponents/case-page/case-page.component';
import { MainComponent } from './сomponents/main/main.component';
import { BurgerSortComponent } from './сomponents/burger-sort/burger-sort.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'burger-sort', component: BurgerSortComponent},
    { path: 'case', component: CasePageComponent},
];
