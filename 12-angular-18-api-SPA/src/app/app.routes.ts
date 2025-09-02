import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event.component';
import { NgtemplateComponent } from './components/directive/ngtemplate/ngtemplate.component';
import { NgContainerComponent } from './components/directive/ng-container/ng-container.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { PipeTheoryComponent } from './components/pipe/pipe-theory/pipe-theory.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
       path: 'structural-dir',
       component: StructuralDirComponent  
    },
    {
        path: 'attribute-dir',
        component: AttributeDirectiveComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path: 'pipe',
        component: PipeTheoryComponent
    },
    {
        path: 'template-form',
        component: TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    },
    {
        path: 'get-api',
        component: GetApiComponent
    },
    {
        path: 'life-cycle-event',
        component: LifecycleEventComponent
    },
    {
        path: 'ng-template',
        component: NgtemplateComponent
    },
    {
        path: 'ng-container',
        component: NgContainerComponent
    }
];
