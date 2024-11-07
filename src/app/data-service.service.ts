import { Injectable } from '@angular/core';

export interface DataItem {
  id: number;
  fecha: string;
  titulo: string;
  descripcion: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: DataItem[] = [];
  private idCounter = 1;




  getNextId(): number {
    return this.idCounter++;
  }

  addItem(item: DataItem) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  getItemById(id: number): DataItem | undefined {
    return this.items.find(item => item.id === id);
  }

  updateItem(updatedItem: DataItem) {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }
}
