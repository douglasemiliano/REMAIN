import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {

  private page = 1;

  public form: FormGroup;
  public selectedFiles: any;
  public formData = new FormData();
  public loading: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private meterialService: MaterialService,
    private http: HttpClient) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public goToMaterials(): void{
    this.router.navigate(['materiais'])
  }

  public createForm(): void {
    this.form = this.fb.group({
      'id': new FormControl(''),
      'title': new FormControl(''),
      'description': new FormControl(''),
      'image': new FormControl(''),
      'externalLinks': new FormControl(''),
    });
  }

  public onSubmit(): void {
    this.insertImageOnform();
    this.loading = true;
  }

  public onChange(event: any) {
    const file = <File>event.srcElement.files[0]
    this.formData.append('imagedata', file);
    this.formData.append('access_token', '1xm8Qe9bfAPdsCJVTU4nt8F01MLFjHAP0RowN3qndL8');
  }

  public goToCreate(): void {
    this.router.navigate(['new']);
  }


  public insertImageOnform():void {
    this.meterialService.uploadImage(this.formData).subscribe( data =>{
      this.form.get('image')?.setValue(data)
      this.form.get('id')?.setValue(data.image_id)
      this.meterialService.postMaterial(this.form.value);
      this.meterialService.saveImage(data);
    });
  }
}
