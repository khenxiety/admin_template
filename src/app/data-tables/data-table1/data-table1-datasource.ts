import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


// TODO: Replace this with your own data model type
export interface DataTable1Item {
  name: string;
  id: number;
  email:any;
  ft_or_tp:any;
  age:any;
  sex:any;
  baccalaureate:any;
  ba_spec:any;
  masters:any;
  ma_spec:any;
  doctorate:any;
  Ph_D_Spec:any;
  professional_licensure_earned:any;
  tenure_of_appointment:any;
  rank:any;
  teaching_load:any;
  subjects_Taught:any
  annual_salary:any;
  place_of_origin:any;
  date_of_birth:any;
  date_of_original_Appointment:any;
  school_graduated:any;
  educational_attainment:any;
  civil_status:any
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTable1Item[] = [
  {
    id: 1,
    name: 'Aala, Christine L.',
    email: 'aala@gmail.com',
    ft_or_tp: 'FT',
    age: '25',
    sex:'F',
    baccalaureate:'Bachelor of Science in Food Engineering',
    ba_spec:'N/A',
    masters:'Masters of Engineering',
    ma_spec:'Chemical Engineering',
    doctorate:'N/A',
    Ph_D_Spec:'N/A',
    professional_licensure_earned:'N/A',
    tenure_of_appointment:'6 years',
    rank:'Instructor',
    teaching_load:'24hrs/week',
    subjects_Taught:'ENGG 413 - Environmental Science & Engineering, SCI 401 - General Chemistry',
    annual_salary:'P15,000.00',
    place_of_origin:'Sabang, Lipa City, Batangas',
    date_of_birth:'January 1, 1980',
    date_of_original_Appointment:'January 1, 2017',
    school_graduated:'De La Salle Lipa, Batangas State University-Alangilan',
    educational_attainment:'Bachelor of Science in Food Engineering, Master of Engineering in Chemical Engineering',
    civil_status:'Single'
  },
  

  
  
];

/**
 * Data source for the DataTable1 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTable1DataSource extends DataSource<DataTable1Item> {
  data: DataTable1Item[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTable1Item[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTable1Item[]): DataTable1Item[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTable1Item[]): DataTable1Item[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
