import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
})
export class EditPostComponent {
  selectedFile!: File;
  onFileSelect(event: any) {
    this.selectedFile = event?.target.files[0];
    console.log(this.selectedFile);
  }

  @ViewChild('editPost') editPost!: NgForm;
  editForm() {
    console.log(this.editPost.value);
    this.editPost.reset();
  }
}
