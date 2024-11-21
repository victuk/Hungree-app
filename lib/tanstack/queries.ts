import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { baseUrl } from '~/baseUrl';

import { ProductResponse, ProductType } from '~/type';
export const useGetAllProducts = () => {
  return useQuery<ProductType>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios('https://dummyjson.com/products');

      return data;
    },
  });
};

export const useGetSingleProduct = (id: string) => {
  return useQuery<ProductResponse>({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await axios(`https://dummyjson.com/products/${id}`);
      return data;
    },
  });
};
export const useGetSimilarProducts = (category: string) => {
  return useQuery<ProductType>({
    queryKey: ['similar_products', category],
    queryFn: async () => {
      const { data } = await axios(`https://dummyjson.com/products/category/${category}?limit=6`);
      return data;
    },
  });
};

export const useLogin = async (email: string, password: string) => {
  const {status, data} = await axios.post(baseUrl + "v1/auth/log-in", {
    email, password
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return {
    status, data
  };
}

export const useRegister = async (firstName: string, lastName: string, email: string, password: string) => {
  const {status, data} = await axios.post(baseUrl + "v1/auth/sample-register", {
    firstName, lastName, email, password
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return {
    status, data
  };
}
