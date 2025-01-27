import { Component } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentsModule, CoreModule, FeatureModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Conta Logic';
}
