import { Component } from '@angular/core';

@Component({
  selector: 'app-profilcandidat',
  templateUrl: './profilcandidat.component.html',
  styleUrls: ['./profilcandidat.component.css']
})
export class ProfilcandidatComponent {
  imageUrl: string = '../../../assets/profile.png'; 

  // Event handler for file input change
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      // Read the file as a data URL and set it as the image URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
