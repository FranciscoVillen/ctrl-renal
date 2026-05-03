import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBarComponent } from "./shared/bottom-bar/bottom-bar.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottomBarComponent, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ctrl-renal-app');
}
