import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="pagination">
      <a *ngFor="let page of pages" [class.active]="page === currentPage" (click)="changePage(page)">
        {{ page }}
      </a>
    </div>
  `,
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 2;
  @Output() pageChange = new EventEmitter<number>();
  rowsPerPage: number = 10;
  


  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  changePage(page: number) {
    if (page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }
}


