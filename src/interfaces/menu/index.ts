import { OrderItemInterface } from 'interfaces/order-item';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  price: number;
  ingredients: string;
  category: string;
  availability: boolean;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    order_item?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  ingredients?: string;
  category?: string;
  restaurant_id?: string;
}
