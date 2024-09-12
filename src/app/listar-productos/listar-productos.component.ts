import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {

  atributoClass:string = "";

  productos:Producto[] = [
    {nombre: "LAPTOP-PRO", precio: 4500, descripcion: "1 TB SSD, 16 GB RAM, Intel i7", imagen: "https://alquilerdelaptops.pe/wp-content/uploads/2023/05/descarga-3-1-1024x576.webp",oculto:false},
    {nombre: "MONITOR-ULTRAWIDE", precio: 1200, descripcion: "34 pulgadas, resolución 4K", imagen: "https://images.samsung.com/is/image/samsung/pe-h890wjl-lc34h890wjlxpe-frontblack-thumb-249123675?$480_480_PNG$",oculto:false},
    {nombre: "TECLADO-MECANICO", precio: 250, descripcion: "Retroiluminado RGB, switches azules", imagen: "https://dojiw2m9tvv09.cloudfront.net/23332/product/X_t-tgk315-46416.png?33&time=1725373989",oculto:false},
    {nombre: "MOUSE-GAMER", precio: 150, descripcion: "Sensor óptico 16000 DPI, 8 botones programables", imagen: "https://i0.wp.com/nasabytechzone.com/wp-content/uploads/2023/05/NS_GM05-1.png?fit=1000%2C1000&ssl=1",oculto:false},
    {nombre: "AURICULARES-SURROUND", precio: 300, descripcion: "Sonido envolvente 7.1, micrófono con cancelación de ruido", imagen: "https://www.datacont.com/web/image/product.template/2716/image_1024?unique=0360674",oculto:false},
    {nombre: "SILLA-GAMER", precio: 800, descripcion: "Ajustable en altura y reclinable, cojines para cuello y espalda", imagen: "https://dojiw2m9tvv09.cloudfront.net/48881/product/078844.png",oculto:false}

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
