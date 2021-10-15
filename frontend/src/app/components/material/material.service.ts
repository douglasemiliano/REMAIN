import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth/auth.service';
import { AttatchmentsUrl, CategorylUrl, ImageUrl, MaterialUrl, PaginationUrl, SERVER_URL } from '../shared/utils/url.utils';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private router: Router, 
              private toastr: ToastrService, 
              private http: HttpClient,
              private authService: AuthService) { }

  public getMaterials(): Observable<any>{
    return this.http.get(SERVER_URL + MaterialUrl.BASE);
  }

  public getMaterialsWithSort(sort: string): Observable<any>{
    return this.http.get(SERVER_URL + MaterialUrl.BASE + "?" + PaginationUrl.SORT + sort);
  }

  public getMaterialsWithPagination(page: number): Observable<any>{
    return this.http.get(SERVER_URL + MaterialUrl.BASE + PaginationUrl.PAGE + page)
  }

  public getMaterialsByAuthorWithPagination(page: number, authorUID: string | null): Observable<any>{
    return this.http.get(SERVER_URL + MaterialUrl.BY_AUTHOR + authorUID + PaginationUrl.PAGE + page)
  }

  public getMaterialsByCategory(categoryId: string | null): Observable<any>{    
    return this.http.get(SERVER_URL + MaterialUrl.BY_CATEGORY + categoryId)
  }

  public getMaterialsByAuthor(authorUID: string | null): Observable<any>{
    return this.http.get(SERVER_URL + MaterialUrl.BY_AUTHOR + authorUID)
  }

  public getMaterialById(id: number): Observable<any> {
    return this.http.get(SERVER_URL + MaterialUrl.BY_ID + id);
  }

  public deleteMaterialById(id: number): Observable<any>{
    return this.http.delete(SERVER_URL + MaterialUrl.BY_ID + id);
  }

  public incrementViewOnMaterial(id: number){
    return this.http.patch(SERVER_URL + MaterialUrl.BY_ID + id, null);
  }

  public getCategories(): Observable<any>{
    return this.http.get(SERVER_URL + CategorylUrl.BASE);
  }

  public getCategoryById(id: string): Observable<any> {
    return this.http.get(SERVER_URL + CategorylUrl.BY_ID + id);
  }

  public uploadImage(multiPartForm: FormData): Observable<any> {
    return this.http.post(ImageUrl.UPLOAD, multiPartForm);
  }

  public saveImage(image: any):Observable<any>{
    return this.http.post(SERVER_URL + ImageUrl.BASE, image)
  }

  public getUserByUid(uid: any): Observable<User> {
    return this.authService.getUserByUid(uid)
  }

  public postMaterial(material: any){ 
    return this.http.post(SERVER_URL + MaterialUrl.BASE,material).
    subscribe( () => {
      this.toastr.success("Material salvo com sucesso", "Sucesso")
      this.router.navigate(['materiais'])
    , (error: string | undefined) => {
      this.toastr.error(error, "Erro")
    }})
  }

  public getGoFileServer(): Observable<any>{
    return this.http.get(AttatchmentsUrl.GET_SERVER);
  }

  public postAttatchmentOnGoFile(server: string, file: FormData): Observable<any> {
    return this.http.post(`https://${server}.${AttatchmentsUrl.UPLOAD}`, file)
  }
}
