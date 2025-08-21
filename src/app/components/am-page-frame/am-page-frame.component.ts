import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'am-page-frame',
  templateUrl: './am-page-frame.component.html',
  styleUrls: ['./am-page-frame.component.scss', './am-page-frame.component.notebook.scss'],
})
export class AmPageFrameComponent {
  constructor(public router: Router) {}

  submenuStates: boolean[] = [];

  toggleSubmenu(index: number): void {
    this.submenuStates[index] = !this.submenuStates[index];
  }

  isSubmenuOpen(index: number): boolean {
    return this.submenuStates[index] || false;
  }
}
