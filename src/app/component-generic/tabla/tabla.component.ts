import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent<T extends { [key: string]: any }> implements OnInit {
  // Data de entrada tipificada genéricamente
  @Input() arrycolumn: { namekey: keyof T, title: string }[] = [];  // Columnas con clave genérica
  @Input() arrydatain!: Observable<T[]>;  // Datos con tipo genérico

  @Input() arrayEventos!: { nameBotton: string, titleBotton: string, accionBotton: string, classBotton: string }[];  // Eventos
  @Output() dataSalida = new EventEmitter<{ accion: string, Dataitem: T | null }>();  // Emisión de la acción y el item correspondiente

  public arrydata: T[] = [];
  public filteredData: T[] = [];
  public searchTerm: string = '';
  public pageSize: number = 10;
  public currentPage: number = 1;
  public totalPages: number = 0;

  // Paginación
  get paginatedData(): T[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredData.slice(start, end);
  }

  // Paginación con límites
  get visiblePages(): any[] {
    const pages: any[] = [];
    const startPage = Math.max(2, this.currentPage - 2); 
    const endPage = Math.min(this.totalPages - 1, this.currentPage + 2);

    pages.push(1); 

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < this.totalPages - 1) {
      pages.push('...');
    }

    pages.push(this.totalPages); 

    return pages;
  }

  // Filtrado dinámico entrada de búsqueda
  filterData(): void {
    this.filteredData = this.arrydata.filter((item: T) => {
      return Object.values(item).some((val) => 
        String(val).toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.currentPage = 1; 
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
  }

  // Cambiar de página
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Obtener los datos observables
  getData(array: Observable<T[]>): void {
    array.subscribe((data: T[]) => {
      this.arrydata = data;
      this.filteredData = [...this.arrydata];
      this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    });
  }

  // Método para obtener el valor de un item con una clave específica
  getitem(item: T, key: keyof T): any {
    return item[key];
  }

 
  getArray(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  ngOnInit(): void {
    this.getData(this.arrydatain);
  }

  
  ItemList(item: T): void {
    this.ItemAccion = {
      accion: "",
      Dataitem: item
    };
  }

  
  EventItem(accion: string): void {
    this.dataSalida.emit({
      accion: accion,
      Dataitem: this.ItemAccion.Dataitem
    });
  }

  private ItemAccion = {
    accion: '',
    Dataitem: null as T | null
  };
}
