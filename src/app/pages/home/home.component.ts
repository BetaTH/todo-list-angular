import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'todo-list';
}
