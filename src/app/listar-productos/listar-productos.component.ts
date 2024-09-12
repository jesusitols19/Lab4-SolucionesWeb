import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {

  atributoClass:string = "";

  productos:Producto[] = [
    {nombre: "LAPTOP-PRO", precio: 4500, descripcion: "1 TB SSD, 16 GB RAM, Intel i7", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZC-feq5IK6C53fyrfN0iOUfF4Ke7jwvlzQ&s",oculto:false},
    {nombre: "MONITOR-ULTRAWIDE", precio: 1200, descripcion: "34 pulgadas, resolución 4K", imagen: "https://www.smartbusiness.pe/cdn/shop/products/MONITOR-LED-29-LG-29WQ600-W-ULTRAWIDE-2560X1080-HDMI-DP-USB-C-1MS75HZFREESYNC.jpg?v=1723674593",oculto:false},
    {nombre: "TECLADO-MECANICO", precio: 250, descripcion: "Retroiluminado RGB, switches azules", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYRsaLauyyvFhkRLLQj8SorsSUl6Bm7Sr5Q&s",oculto:false},
    {nombre: "MOUSE-GAMER", precio: 150, descripcion: "Sensor óptico 16000 DPI, 8 botones programables", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8vvTinNnPUmy-kLGhSTFznuPuBBTOgKNnw&s",oculto:false},
    {nombre: "AURICULARES-SURROUND", precio: 300, descripcion: "Sonido envolvente 7.1, micrófono con cancelación de ruido", imagen: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4365/PMP20000326219/full_image-1.jpeg",oculto:false},
    {nombre: "SILLA-GAMER", precio: 800, descripcion: "Ajustable en altura y reclinable, cojines para cuello y espalda", imagen: "https://www.smartbusiness.pe/cdn/shop/files/7163161-silla-gamer-teros-negro-y-rojo.jpg?v=1716591436",oculto:false}

  ];

  clickVerDetalle(index:number):void{
    this.productos[index].oculto = true;
    //this.atributoClass = "Seleccionados";

    if(this.productos[index].precio > 1000){
      this.atributoClass = "ProductosCaros";
    }
    else{
      this.atributoClass = "ProductosBaratos";
    }
  }

  clickCerrarDetalle(index:number):void{
    this.productos[index].oculto = false;
    this.atributoClass = "";
  }

}

interface Producto{
  nombre:string,
  precio:number,
  descripcion:string,
  imagen:string,
  oculto:boolean
}
