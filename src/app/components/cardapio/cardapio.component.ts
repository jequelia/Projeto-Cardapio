import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import { PRATO } from 'src/environments/endpoints';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

export class CardapioComponent implements OnInit {
  constructor(private http : WebService) { }

  prato = {
    nome: '',
    valor: '',
    quantidade:''
  }
  
  itens: Array<any>;


  ngOnInit() {

    this.http.get(PRATO).subscribe(
      res=>{
        this.itens = res
        console.log(this.itens)
      }
    )
  }

   enviarPrato(){
    this.http.post( PRATO, this.prato)
   }

   delete(){

    
   }

 

}
