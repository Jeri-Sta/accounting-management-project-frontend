import { Component } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentsModule, CoreModule, FeatureModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Conta Logic';
}
