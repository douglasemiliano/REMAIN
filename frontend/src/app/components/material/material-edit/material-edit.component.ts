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

  page = 1;

  form: FormGroup;
  selectedFiles: any;
  formData = new FormData();
  public loading: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private meterialService: MaterialService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
  }

  public goToMaterials(): void{
    this.router.navigate(['materiais'])
  }

  createForm(): void {
    this.form = this.fb.group({
      'title': new FormControl(''),
      'description': new FormControl(''),
      'image': new FormControl('')
    });
  }

  onSubmit(): void {
    this.insertImageOnform();
    this.loading = true;
  }

  onChange(event: any) {
    const file = <File>event.srcElement.files[0]
    this.formData.append('imagedata', file);
    this.formData.append('access_token', '1xm8Qe9bfAPdsCJVTU4nt8F01MLFjHAP0RowN3qndL8');
  }

  goToCreate(): void {
    this.router.navigate(['new']);
  }


  public insertImageOnform():void {
    this.meterialService.uploadImage(this.formData).subscribe( data =>{
      this.form.get('image')?.setValue(data)
      this.meterialService.postMaterial(this.form.value);
      this.meterialService.saveImage(data);
    });
  }
}
