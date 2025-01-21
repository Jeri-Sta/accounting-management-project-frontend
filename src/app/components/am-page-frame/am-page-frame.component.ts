import { Component } from '@angular/core';

@Component({
  selector: 'am-page-frame',
  templateUrl: './am-page-frame.component.html',
  styleUrl: './am-page-frame.component.css',
})
export class AmPageFrameComponent {
  submenuStates: boolean[] = [];

  toggleSubmenu(index: number): void {
    this.submenuStates[index] = !this.submenuStates[index];
  }

  isSubmenuOpen(index: number): boolean {
    return this.submenuStates[index] || false;
  }
}
