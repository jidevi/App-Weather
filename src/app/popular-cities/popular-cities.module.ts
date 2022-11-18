import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularCitiesButtonComponent } from './components/popular-cities-button/popular-cities-button.component';

@NgModule({
  declarations: [PopularCitiesButtonComponent],
  imports: [CommonModule],
  exports: [PopularCitiesButtonComponent],
})
export class PopularCitiesModule {}
