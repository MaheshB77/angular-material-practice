import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { DemoComponent } from './components/demo/demo.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'tdf', component: TemplateDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
