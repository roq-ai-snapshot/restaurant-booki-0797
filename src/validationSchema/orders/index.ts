import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  total_price: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
