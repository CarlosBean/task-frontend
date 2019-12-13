import { NgModule } from '@angular/core';
import { ProyectsListComponent } from './proyects-list/proyects-list.component';
import { ProyectsRoutingModule } from './proyects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectUpdateComponent } from './proyect-update/proyect-update.component';

@NgModule({
  declarations: [ProyectsListComponent, ProyectUpdateComponent],
  imports: [ProyectsRoutingModule, SharedModule]
})

export class ProyectsModule {}