import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SaiTaskComponent } from './components/sai-task/sai-task.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'st', component: SaiTaskComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'tdf', component: TemplateDrivenFormComponent },
  { path: 'table', component: MaterialTableComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'rf', component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
