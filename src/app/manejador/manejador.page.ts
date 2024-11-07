import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, DataItem } from '../data-service.service';

@Component({
  selector: 'app-manejador',
  templateUrl: './manejador.page.html',
  styleUrls: ['./manejador.page.scss'],
})
export class ManejadorPage implements OnInit {


  item: DataItem = {
    id: 0,
    fecha: '',
    titulo: '',
    descripcion: '',
    foto: ''
  };
  isEdit = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const itemId = params['id'];
      const action = params['action'];
      this.isEdit = action === 'edit';

      if (this.isEdit && itemId) {
        const existingItem = this.dataService.getItemById(+itemId);
        if (existingItem) {
          this.item = { ...existingItem };
        }
      }
    });
  }

  saveItem() {
    if (this.isEdit) {
      this.dataService.updateItem(this.item);
    } else {
      this.item.id = this.dataService.getNextId();
      this.dataService.addItem(this.item);
    }
    this.router.navigate(['/listado']);
  }

  selectPhoto() {

  }
}
