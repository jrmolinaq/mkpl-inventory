import { Validators } from '@angular/forms';

// 6291456 es = 6 * 1024 * 1024
export const MAX_FILE_SIZE = 6291456;

export const STEPS = {
  SELECT_FILE: '1',
  LOADING: '2',
  SUCCESS: '3',
  ERROR: '4',
  UNIT_LOAD: '5',
  SUCCESS_INDIVIDUAL: '6'
};

export const qualityTypes = [
  {
    id: 'OEM',
    name: 'OEM'
  },
  {
    id: 'Usado',
    name: 'Usado'
  },
  {
    id: 'Genuino',
    name: 'Genuino'
  },
  {
    id: 'After Market',
    name: 'After Market'
  }
];

export const FIELDS = [
  {
    name: 'productInfo',
    fields: [
      {
        name: 'reference',
        validators: [
          Validators.required
        ]
      },
      {
        name: 'name',
        validators: [
          Validators.required
        ]
      },
      {
        name: 'unitPrice',
        validators: [
          Validators.required,
          Validators.pattern(new RegExp(/^[0-9]*[.]{1}[0-9]{1,2}$|^[0-9]*$/))
        ]
      },
      {
        name: 'quantity',
        validators: [
          Validators.required,
          Validators.pattern(new RegExp(/^[1-9][0-9]*$/))
        ]
      },
      {
        name: 'quality',
        validators: [
          Validators.required
        ]
      }
    ]
  }
];
