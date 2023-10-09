import { OrderInterface } from 'interfaces/order';
import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface OrderItemInterface {
  id?: string;
  quantity: number;
  price: number;
  order_id: string;
  menu_id: string;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  menu?: MenuInterface;
  _count?: {};
}

export interface OrderItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  menu_id?: string;
}
