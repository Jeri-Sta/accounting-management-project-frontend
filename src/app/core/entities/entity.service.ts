import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageService, SortMeta } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

export class EntityService<T> {
  constructor(
    protected http: HttpClient,
    protected messageService: MessageService,
    protected entityUrl: string
  ) {
    this.http = http;
    this.messageService = messageService;
    this.entityUrl = entityUrl;

    this.defaultCatch = this.defaultCatch.bind(this);
  }

  public getListQueryParams(listParams: ListParams) {
    const {
      page = 0,
      size = 10,
      sort = [],
      filterQuery = '',
      displayFields = [],
    } = listParams;

    let params = new HttpParams();
    params = params.append('size', String(size));
    params = params.append('offset', String(page));

    if (sort && sort.length) {
      params = params.append(
        'orderby',
        sort
          .map((s) => {
            let order = '';
            if (s.order === 1) order = ' asc';
            else if (s.order === -1) order = ' desc';
            return `${s.field}${order}`;
          })
          .join(', ')
      );
    }

    if (filterQuery) params = params.append('filter', filterQuery);

    if (displayFields && displayFields.length)
      params = params.append('displayfields', displayFields.join());

    return params;
  }

  private getBodyParams(listParams: ListParams): BodyParams {
    const {
      page = 0,
      size = 10,
      sort = [],
      filterQuery = '',
      displayFields = [],
    } = listParams;
    const bodyParams: BodyParams = {};

    bodyParams.size = size;
    bodyParams.offset = page;

    if (sort && sort.length) {
      bodyParams.orderBy = sort
        .map((s) => {
          let order = '';
          if (s.order === 1) order = ' asc';
          else if (s.order === -1) order = ' desc';
          return `${s.field}${order}`;
        })
        .join(', ');
    }

    if (filterQuery) bodyParams.filter = filterQuery;

    if (displayFields && displayFields.length)
      bodyParams.displayfields = displayFields.join();

    return bodyParams;
  }

  public list() {
    return this.http.get<T[]>(this.entityUrl).pipe(this.defaultCatch());
  }

  public insert(entity: T) {
    return this.http
      .post(`${this.entityUrl}/create`, entity, { responseType: 'text' })
      .pipe(this.defaultCatch());
  }

  public update(entity: T) {
    return this.http
      .put(`${this.entityUrl}/update`, entity, { responseType: 'text' })
      .pipe(this.defaultCatch());
  }

  public delete(id: any) {
    return this.http
      .delete(`${this.entityUrl}/${id}`, { responseType: 'text' })
      .pipe(this.defaultCatch());
  }

  public defaultCatch() {
    return catchError((err: any) => {
      if (err) {
        let summary = 'Erro';
        let detail = err.message || 'Error';

        if (err.status === 401) {
          summary = 'Não autorizado';
          detail = 'Você não possui permissão para essa ação';
        }

        this.messageService.add({
          severity: 'error',
          summary,
          detail,
        });
      }

      return throwError(() => new Error(err.message));
    });
  }
}

export interface ListParams {
  page?: number;
  size?: number;
  sort?: SortMeta[];
  filterQuery?: string;
  displayFields?: string[];
}

export interface BodyParams {
  offset?: number;
  size?: number;
  orderBy?: string;
  filter?: string;
  displayfields?: string;
}
