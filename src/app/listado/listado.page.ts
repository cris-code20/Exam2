import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService,DataItem } from '../data-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  items: DataItem[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.loadItems();
  }

  ionViewWillEnter() {
    this.loadItems();
  }

  loadItems() {
    this.items = this.dataService.getItems();
  }

  editItem(item: DataItem) {
    this.router.navigate(['/manejador'], { queryParams: { id: item.id, action: 'edit' } });
  }

  deleteItem(id: number) {
    this.dataService.deleteItem(id);
    this.loadItems();
  }

}
