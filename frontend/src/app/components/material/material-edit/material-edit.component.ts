import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../../auth/auth.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { NgxDropzoneComponent } from 'ngx-dropzone';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {

  public valid: boolean = false;
  private page = 1;
  public materialForm: FormGroup;
  public imageFormData = new FormData();
  public fileFormData = new FormData();
  public loading: boolean = false;
  public user: User;
  files: any[] = [];
  public goFileServer: string;
  @ViewChild(NgxDropzoneComponent) dropzone: NgxDropzoneComponent;
  constructor(private router: Router,
    private fb: FormBuilder,
    private materialService: MaterialService,
    private http: HttpClient,
    private toastr: ToastrService,) { }

    ngOnInit() {
      this.getGofileServer();
      this.createForm();
      this.getUser();
    }

  public getUser(): void {
    this.materialService.getUserByUid(localStorage.getItem('uid')).subscribe(user => {
      this.user = user;
      this.materialForm.get('author')?.setValue(this.user);      
    });
  }

  public goToMaterials(): void{
    this.router.navigate(['materiais'])
  }

  public createForm(): void {
    this.materialForm = this.fb.group({
      'title': new FormControl(''),
      'description': new FormControl(''),
      'image': new FormControl(),
      'externalLinks': new FormControl(''),
      'category': new FormControl(6),
      'author': new FormControl(),
      'attatchments': new FormControl()
    });
  }

  public onSubmit(): void {
    this.loading = true;
    this.materialService.postMaterial((this.materialForm.value)) 
  }

  public onChange(event: any) {
    const file = <File>event.srcElement.files[0]
    this.fileFormData.append('imagedata', file);
    this.fileFormData.append('token', 'z6YU6kRGZ1gfchg499hnRTmoHzBSARj4');
    this.fileFormData.append('folderId', '349d81fd-f9a1-4b18-890b-50ca8d9f3068');
    this.loading = true;
    this.insertFilesOnform();
  }

  public insertFilesOnform():void {
    this.materialService.postAttatchmentOnGoFile(this.goFileServer, this.fileFormData).subscribe(data => {
      this.materialForm.get("attatchments")?.setValue(data.data.directLink);
      this.valid = true;
      this.loading = false;
    }, error => {
      
    })
  }

  public onSelect(event: any) {
    this.files.push(...event.addedFiles);
    let file = this.files[0]
    this.imageFormData.append('imagedata', file);
    this.imageFormData.append('access_token', '1xm8Qe9bfAPdsCJVTU4nt8F01MLFjHAP0RowN3qndL8');
    this.dropzone.disableClick = true;
    this.insertImageOnform();
  }

  public insertImageOnform():void {
    this.materialService.uploadImage(this.imageFormData).subscribe(data =>{
      this.materialService.saveImage(data).subscribe(response => {
        this.toastr.success("Imagem carregada com sucesso","Sucesso")
        this.materialForm.get("image")?.setValue(response);
        
      }, error => {
        this.toastr.error(error, "Erro")
      })
      this.files[0] = data;
    });
  }

  public goToCreate(): void {
    this.router.navigate(['new']);
  }

  public saveMaterial(): void { 
      this.materialService.postMaterial(this.materialForm.value);
    }


  public onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    this.dropzone.disableClick = false;
  }

  public getGofileServer(){
    this.materialService.getGoFileServer().subscribe(data => {
      this.goFileServer = data.data.server;  
    });
  }
}
