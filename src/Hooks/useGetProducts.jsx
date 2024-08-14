import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/getProducts.api'

export const useGetProducts = () => {
  return useQuery({
    queryKey : ["products"],
    queryFn:getProducts
  })
}
