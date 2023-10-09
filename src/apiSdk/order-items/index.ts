import queryString from 'query-string';
import { OrderItemInterface, OrderItemGetQueryInterface } from 'interfaces/order-item';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';
import { convertQueryToPrismaUtil, getOrderByOptions } from 'lib/utils';
import { fetcher } from 'lib/api-fetcher';

export const getOrderItems = async (
  query: OrderItemGetQueryInterface = {},
): Promise<PaginatedInterface<OrderItemInterface>> => {
  const { offset: skip, limit: take, order, ...restQuery } = query;
  const pagination = {
    skip,
    take,
  };
  const params = convertQueryToPrismaUtil(restQuery, 'order_item');
  const [response, count] = await Promise.all([
    fetcher(
      '/api/model/order_item/findMany',
      {},
      {
        ...params,
        ...pagination,
        ...(order && {
          orderBy: getOrderByOptions(order),
        }),
      },
    ),
    fetcher('/api/model/order_item/count', {}, { where: params.where }),
  ]);
  return {
    ...response,
    totalCount: count.data,
  };
};

export const createOrderItem = async (orderItem: OrderItemInterface) => {
  return fetcher('/api/model/order_item', { method: 'POST', body: JSON.stringify({ data: orderItem }) });
};

export const updateOrderItemById = async (id: string, orderItem: OrderItemInterface) => {
  return fetcher('/api/model/order_item/update', {
    method: 'PUT',
    body: JSON.stringify({
      where: {
        id,
      },
      data: orderItem,
    }),
  });
};

export const getOrderItemById = async (id: string, query: GetQueryInterface = {}) => {
  const { relations = [] } = query;
  const response = await fetcher(
    '/api/model/order_item/findFirst',
    {},
    {
      where: {
        id,
      },
      include: relations.reduce((acc, el) => ({ ...acc, [el.split('.')[0]]: true }), {}),
    },
  );
  return response.data;
};

export const deleteOrderItemById = async (id: string) => {
  return fetcher(
    '/api/model/order_item/delete',
    { method: 'DELETE' },
    {
      where: {
        id,
      },
    },
  );
};
