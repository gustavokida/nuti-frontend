import { UrlResponse } from './../services/dto/url.response';
import { NgForm } from '@angular/forms';
import { Tag } from '../model/url.tag';
import { Url } from '../model/url.url';
import { UrlDto } from './../services/dto/url.dto';
import { UrlService } from './../services/url.service';
import { Component, OnInit } from '@angular/core';
import { listaUrlDto } from '../services/dto/lista.url.dto';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.scss']
})
export class UrlFormComponent{
  valorUrl: string = '';
  urlDto: UrlDto = {urls: ''}
  listaUrl: listaUrlDto = {listaUrlTagsContadas: []};
  elementDetails: any = {
    id: String,
    url: String,
    listaTag: []
  };

  constructor(private urlService: UrlService) {}
  ngOnInit(): void {
    this.urlService.getAllUrl().subscribe(res => {
      this.listaUrl = res;
    });
  }

  onSubmit(urlForm: NgForm) {
    let dto: UrlDto = urlForm.value;
    console.log(dto)
    this.urlService.enviarUrl(dto).subscribe(
      (res:UrlResponse) => {
        console.log(res.message);
        this.refreshTable();
      }
    );
    console.log('Submitted text:', urlForm.value);
  }

  refreshTable(){
    this.urlService.getAllUrl().subscribe(res => {
      this.listaUrl = res;
    });
  }


  showDetails(url:Url) {
    if (this.elementDetails != null && this.elementDetails.id == url.id){
      this.elementDetails = null;
      }
    else this.elementDetails = url;
  }

}
