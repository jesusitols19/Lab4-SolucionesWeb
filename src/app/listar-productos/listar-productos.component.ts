import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {

  atributoClass:string = "";
  atributoSeleccionar:string = "";

  productos:Producto[] = [
    {nombre: "LAPTOP-PRO", precio: 4500, descripcion: "1 TB SSD, 16 GB RAM, Intel i7", imagen: "https://alquilerdelaptops.pe/wp-content/uploads/2023/05/descarga-3-1-1024x576.webp",oculto:false},
    {nombre: "MONITOR-ULTRAWIDE", precio: 1200, descripcion: "34 pulgadas, resolución 4K", imagen: "https://images.philips.com/is/image/philipsconsumer/b960c71a83c6459b9cb5b01300ff31ce?wid=700&hei=700&$pnglarge$",oculto:false},
    {nombre: "TECLADO-MECANICO", precio: 250, descripcion: "Retroiluminado RGB, switches azules", imagen: "https://pe.vsglatam.com/cdn/shop/products/Featured_fc349777-bc2d-40d6-9624-1096a01c6c6a_1024x1024.png?v=1659899246",oculto:false},
    {nombre: "MOUSE-GAMER", precio: 150, descripcion: "Sensor óptico 16000 DPI, 8 botones programables", imagen: "https://thundergamerstore.com/wp-content/uploads/2023/01/g502x-plus-gallery-2-black.webp",oculto:false},
    {nombre: "AURICULARES-SURROUND", precio: 300, descripcion: "Sonido envolvente 7.1, micrófono con cancelación de ruido", imagen: "https://resource.logitech.com/content/dam/gaming/en/products/g935/g935-gallery-1.png",oculto:false},
    {nombre: "SILLA-GAMER", precio: 800, descripcion: "Ajustable en altura y reclinable, cojines para cuello y espalda", imagen: "https://paradagamer.com/cdn/shop/products/VG-PL6800SE_MP-MAIN_ver2_800x.png?v=1669818488",oculto:false}

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
