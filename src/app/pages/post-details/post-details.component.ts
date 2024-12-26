import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from '../../../posts.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  posts = posts;
  router = inject(ActivatedRoute);
  postId: any;
  postDetails: any;
  isAuthor = true;
  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => (this.postId = param.get('id')));
    of(this.posts.find((post) => post.id == +this.postId)).subscribe(
      (value) => (this.postDetails = value)
    );
  }
}
