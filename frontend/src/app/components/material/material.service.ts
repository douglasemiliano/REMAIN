import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private router: Router, 
              private toastr: ToastrService, 
              private http: HttpClient,
              private authService: AuthService) { }

  public getMaterials(): Observable<any>{
    return this.http.get('http://localhost:8080/public/material');
  }

  public getMaterialById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/public/material/${id}`);
  }


  public uploadImage(multiPartForm: FormData): Observable<any> {
    return this.http.post('https://upload.gyazo.com/api/upload', multiPartForm);
  }

  public saveImage(image: any):Observable<any>{
    return this.http.post('http://localhost:8080/public/image', image)
  }

  public getUserByUid(uid: any): Observable<User> {
    return this.authService.getUserByUid(uid)
  }

  public postMaterial(material: any){ 
    return this.http.post(`http://localhost:8080/public/material`,material).
    subscribe( () => {
      this.toastr.success("Material salvo com sucesso", "sucesso")
      this.router.navigate(['materiais'])
    , (error: string | undefined) => {
      this.toastr.error(error, "Erro")
    }})
  }

  public getGoFileServer(): Observable<any>{
    return this.http.get(`https://api.gofile.io/getServer`);
  }

  public postAttatchmentOnGoFile(server: string, file: FormData): Observable<any> {
    return this.http.post(`https://${server}.gofile.io/uploadFile`, file)
  }
}
