import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../../auth/auth.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { NgxDropzoneComponent } from 'ngx-dropzone';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {

  public htmlContent = new FormControl();
  public selectedCategories =  new FormControl([]);
  public selectedCategoriesMirror: Category[] = [];
  public categories: any[];
  public valid: boolean = false;
  public categoria: any;
  public materialForm: FormGroup;
  public imageFormData = new FormData();
  public fileFormData = new FormData();
  public loading: boolean = false;
  public user: User;
  public editMode: boolean;
  public materialId: number;
  public material: any;
  files: any[] = [];
  public goFileServer: string;
  @ViewChild(NgxDropzoneComponent) dropzone: NgxDropzoneComponent;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private materialService: MaterialService,
    private http: HttpClient,
    private toastr: ToastrService,) { }

    ngOnInit() {
      this.getGofileServer();
      this.createForm();
      this.getUser();
      this.getCategories();
      this.getMaterialId();
    }

  public getUser(): void {
    this.materialService.getUserByUid(localStorage.getItem('uid')).subscribe(user => {
      this.user = user;
      this.materialForm.get('author')?.setValue(this.user);      
    });
  }

  public setEditMode(): void{
    this.materialId ? this.editMode = true: this.editMode = false;
  }

  public getMaterialId(): void {
    this.route.params.subscribe( data => {
      this.materialId = data.id;
      this.setEditMode();   
      this.getMaterial(); 
    });
  }

  public getMaterial(): void{
    this.materialService.getMaterialById(this.materialId).subscribe(data=>{
      this.material = data;
      this.setMaterialDataOnFields();
    });
  }

  public setMaterialDataOnFields(): void {
    this.materialForm.get("title")?.setValue(this.material.title);
    this.materialForm.get("description")?.setValue(this.material.description);
    this.materialForm.get("image")?.setValue(this.material.image);
    this.materialForm.get("externalLinks")?.setValue(this.material.externalLinks);
    this.materialForm.get("category")?.setValue(this.material.category);
    this.materialForm.get("author")?.setValue(this.material.author);
    this.materialForm.get("attatchments")?.setValue(this.material.attatchments);
    this.selectedCategories = new FormControl([this.material.category])
    this.selectedCategoriesMirror = this.selectedCategories.value;
    console.log(this.selectedCategories.value);
    
    
    
  }

  public getCategories(): void {
    this.materialService.getCategories().subscribe(data => {
      this.categories = data.content;
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
      'category': new FormControl(''),
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
    this.insertCategoryOnForm();
  }

  public printForm(){
   console.log(this.htmlContent.value);
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

  public selectCategories (category: any){
    this.selectedCategoriesMirror.push(category)   
  }

  public removeCategoryFromSelectedList(index: number): void {
    this.selectedCategories.value.splice(index, 1);
    this.selectedCategoriesMirror.splice(index, 1);
    this.selectedCategories.setValue(this.selectedCategories.value);
  }

  public insertCategoryOnForm(): void {
    this.materialForm.get("category")?.setValue(this.selectedCategoriesMirror);
  }


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: '',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
