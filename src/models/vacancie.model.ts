import {Entity, model, property} from '@loopback/repository';
import {time} from 'console';

@model({
  settings: {
    postgresql: {
      schema: 'public',
      table: 'vacancies'
    }
  }
})
export class Vacancie extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'id',
      dataType: 'bigserial',
    },
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'title_of_vacancie',
      dataType: 'varchar',
    },

  })
  title_of_vacancie: string;

  @property({
    type: 'date',
    default: time,
    postgresql: {
      columnName: 'published_at',
      dataType: 'timestamp',
    },
  })
  published_at?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'status',
      dataType: 'varchar',
    },
  })
  status: string;

  @property({
    type: 'number',
    default: 0,
    postgresql: {
      columnName: 'salary',
      dataType: 'decimal',
    },
  })
  salary?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'vacancie_details',
      dataType: 'text',
    },
  })
  vacancie_details: string;

  @property({
    type: 'number',
    default: 0,
    postgresql: {
      columnName: 'rol_id',
      dataType: 'integer',
    },
  })
  rol_id?: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'postulation_deadline',
      dataType: 'timestamp',
    },
  })
  postulation_deadline: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vacancie>) {
    super(data);
  }
}

export interface VacancieRelations {
  // describe navigational properties here
}

export type VacancieWithRelations = Vacancie & VacancieRelations;
