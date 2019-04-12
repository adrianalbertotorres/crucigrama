import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'crucigrama';
  columna:number=12;
  
 
  //a:any[][]=[[1,2,3,4,5,6,7,8,9,10,11,12],[1,2,3,4,5,6,7,8,9,10,11,12]];

  a:any[][]=[[],[],[],[],[],[],[],[],[],[],[],[]];
  palabra:any[][]=[[],[]];


  ngOnInit() {

    for (let x = 0; x < 12; x++) {
      for (let y = 0; y < 12; y++) {
      this.a[x][y]=x;
      }
    }
 
    this.palabra[0][0]='ante'; this.palabra[0][1]='preposición';
    this.palabra[1][0]='cabe'; this.palabra[1][1]='preposición';
    this.palabra[2][0]='con'; this.palabra[2][1]='preposición';
    this.palabra[3][0]='contra'; this.palabra[3][1]='preposición';
    this.palabra[4][0]='de'; this.palabra[4][1]='preposición';
    this.palabra[5][0]='desde'; this.palabra[5][1]='preposición';
    this.palabra[6][0]='en'; this.palabra[6][1]='preposición';
    this.palabra[7][0]='entre'; this.palabra[7][1]='preposición';
    this.palabra[8][0]='hasta'; this.palabra[8][1]='preposición';
    this.palabra[9][0]='hacia'; this.palabra[9][1]='preposición';
    this.palabra[10][0]='para'; this.palabra[10][1]='preposición';
    this.palabra[11][0]='por'; this.palabra[11][1]='preposición';
    this.palabra[12][0]='segun'; this.palabra[12][1]='preposición';
    this.palabra[13][0]='si'; this.palabra[13][1]='afirmación';
    this.palabra[14][0]='sin'; this.palabra[14][1]='preposición';
    this.palabra[15][0]='sobre'; this.palabra[15][1]='preposición';
    this.palabra[16][0]='tras'; this.palabra[16][1]='preposición';
    
    
          
  }
 

}
