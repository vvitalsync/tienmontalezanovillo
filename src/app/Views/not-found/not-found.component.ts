import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  barcode: String='';
  private route=inject(Router);
  private Aroute=inject(ActivatedRoute)
  
  constructor(){
    this.Aroute.params.subscribe(params=>{
      this.barcode = String(params['barcode']);
    });
  }

  gotoHome():void{
    this.route.navigate(['']);
  }
}
