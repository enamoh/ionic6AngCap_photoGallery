import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor() { }

  public async addNewToGallery(){
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({ 
      resultType: CameraResultType.Uri,   // file-based data; provides best performance 
      source: CameraSource.Camera, // automatically take a new photo with the camera 
      quality: 100 // highest quality ( 0 to 100 )
    });

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

  private async savePicture( photo: Photo ){

  }
}
