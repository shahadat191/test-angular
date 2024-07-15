import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  selectedFiles: File[] = [];

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      for(let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        this.selectedFiles.push(file);
        console.log(file.name);
      }
        // Additional logic for the selected file
    }  }

  onUpload(): void {
    if(this.selectedFiles) {
      // const formData = new FormData();
      // formData.append('file', this.selectedFile, this.selectedFile?.name);
      // console.log(this.selectedFile.name);
    }
  }

  downloadFile(file: File): void {
    // Create a URL for the file
    const bUrl = window.URL.createObjectURL(file);
  
    // Create a new anchor element
    const link = document.createElement('a');
    
    // Set the href and download attributes for the link
    link.href = bUrl;
    link.download = file.name;
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Trigger the download by simulating a click on the link
    link.click();
  
    // Clean up by revoking the Blob URL and removing the link
    window.URL.revokeObjectURL(bUrl);
    document.body.removeChild(link);
  }
}
