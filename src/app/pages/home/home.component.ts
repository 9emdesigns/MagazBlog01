import { Component } from '@angular/core';
import { posts } from '../../../posts.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  posts = posts;
}
