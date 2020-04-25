import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayLeftRotationComponent } from './array-left-rotation/array-left-rotation.component';



export const routes: Routes = [
    { path: 'array-left-rotation', component: ArrayLeftRotationComponent },
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {
}
