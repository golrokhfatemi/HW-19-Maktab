

import BootCampsCard from '../components/BootCampsCard'

import httpRequest from '../Services/Http-request'
import { useSearchParams } from 'react-router-dom'
import { useGetProducts } from '../Hooks/UseGetProducts'

export default function BootCampsPage() {
  // const [products ,setProducts] = useState([])
  // const [searchParams , setSearchParams] = useSearchParams()

  const {data,error,isError,isLoading} = useGetProducts()
  console.log(data);

  
    
  return (
    <div>
         {/* <input type='text' placeholder='Search here ...'
          className='p-3 bg-slate-100 rounded-lg w-1/2'
          onChange={(e) => setSearchParams((prev) =>{ 
            prev.set("title" , e.target.value)
            return prev}
          )}></input> */}
          <div className='grid grid-cols-3 gap-4 mt-8'>
            {!isLoading &&
            data.map(product => <BootCampsCard 
            data={product}
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            id={product.id}
              
              /> )
            }
          </div>
    </div>
   
  )
}
