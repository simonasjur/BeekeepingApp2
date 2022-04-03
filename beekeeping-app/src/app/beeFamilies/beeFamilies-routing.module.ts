import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddBeeFamilyComponent } from './add.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListComponent },
            { path: ':id', component: HomeComponent },
            { path: 'add', component: AddBeeFamilyComponent },
            { path: 'edit/:id', component: AddBeeFamilyComponent}
            //{ path: 'edit/:id', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BeeFamiliesRoutingModule { }