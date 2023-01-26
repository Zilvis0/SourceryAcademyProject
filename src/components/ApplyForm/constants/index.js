import { ACADEMIES, CITIES } from '@shared/constants';

export const END_POINT = 'https://sfe-2022-data.netlify.app/api/register';

export const ACADEMIES_DATA = [
  {
    value: ACADEMIES.DEVELOPERS.value,
    label: ACADEMIES.DEVELOPERS.value,
    id: ACADEMIES.DEVELOPERS.name,
    cities: [
      { value: CITIES.KAUNAS, text: CITIES.KAUNAS },
      { value: CITIES.VILNIUS, text: CITIES.VILNIUS },
      { value: CITIES.KLAIPEDA, text: CITIES.KLAIPEDA },
      { value: CITIES.WARSAW, text: CITIES.WARSAW },
    ],
  },
  {
    value: ACADEMIES.TESTERS.value,
    label: ACADEMIES.TESTERS.value,
    id: ACADEMIES.TESTERS.name,
    cities: [
      { value: CITIES.KAUNAS, text: CITIES.KAUNAS },
      { value: CITIES.VILNIUS, text: CITIES.VILNIUS },
    ],
  },
  {
    value: ACADEMIES.FRONTEND.value,
    label: ACADEMIES.FRONTEND.value,
    id: ACADEMIES.FRONTEND.name,
    cities: [
      { value: CITIES.KAUNAS, text: CITIES.KAUNAS },
      { value: CITIES.VILNIUS, text: CITIES.VILNIUS },
    ],
  },
];

export const VALID_FILE_TYPES = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
];

export const MAX_FILE_SIZE = 5; // MB

export const ERROR_MESSAGES = {
  REQUIRED: 'Required',
  LENGTH: (length) => `Must be less than ${length} characters`,
  EMAIL: 'Invalid email address',
  FILE_TYPE: 'Incorrect file type',
  FILE_SIZE: `Max file size ${MAX_FILE_SIZE} MB`,
  PRIVACY: 'You must agree to the terms',
};
