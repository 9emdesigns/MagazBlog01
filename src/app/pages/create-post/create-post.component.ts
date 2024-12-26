import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  selectedFile!: File;
  onFileChange(event: any) {
    this.selectedFile = event?.target.files[0];
    console.log(this.selectedFile);
  }

  @ViewChild('createPost') createPost!: NgForm;
  createForm() {
    console.log(this.createPost.value);
    this.createPost.reset();
  }
}
