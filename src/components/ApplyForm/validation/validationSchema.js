import * as yup from 'yup';
import { getBytesToMb } from '@shared/functions';
import { ACADEMIES, CITIES } from '@shared/constants';
import { ERROR_MESSAGES, VALID_FILE_TYPES, MAX_FILE_SIZE } from '../constants';

export const validationSchema = yup.object({
  academy: yup
    .string()
    .oneOf([
      ACADEMIES.DEVELOPERS.value,
      ACADEMIES.TESTERS.value,
      ACADEMIES.FRONTEND.value,
    ])
    .required(ERROR_MESSAGES.REQUIRED),
  city: yup
    .string()
    .oneOf([CITIES.KAUNAS, CITIES.VILNIUS, CITIES.KLAIPEDA, CITIES.WARSAW])
    .required(ERROR_MESSAGES.REQUIRED),
  firstName: yup
    .string()
    .max(20, ERROR_MESSAGES.LENGTH(20))
    .required(ERROR_MESSAGES.REQUIRED),
  lastName: yup
    .string()
    .max(20, ERROR_MESSAGES.LENGTH(20))
    .required(ERROR_MESSAGES.REQUIRED),
  email: yup
    .string()
    .max(40, ERROR_MESSAGES.LENGTH(40))
    .email(ERROR_MESSAGES.EMAIL)
    .required(ERROR_MESSAGES.REQUIRED),
  resume: yup
    .mixed()
    .required(ERROR_MESSAGES.REQUIRED)
    .test(
      'fileType',
      ERROR_MESSAGES.FILE_TYPE,
      (file) => file && VALID_FILE_TYPES.includes(file.type)
    )
    .test(
      'fileSize',
      ERROR_MESSAGES.FILE_SIZE,
      (file) => file && getBytesToMb(file.size) <= MAX_FILE_SIZE
    ),
  privacy: yup.bool().oneOf([true], ERROR_MESSAGES.PRIVACY).required(),
});
