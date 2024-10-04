import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedmoduleRoutingModule } from 'src/app/core/sharedmodule/sharedmodule-routing.module';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,SharedmoduleRoutingModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  implements OnInit {


  constructor( private router: Router ){

  

  }
  ngOnInit(): void {

    
 

    
  }




}
