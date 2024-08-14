import { Link } from "react-router-dom"



export default function BootCampsCard({data}) {
  const {title ,id,image,price ,description} = data
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-slate-100 rounded-3xl p-4 m-2">
 
      <Link to={`/bootcamps/${id}`}>
        <img src={image} width={200} height={300} className="rounded-2xl"/>
        <h1>{title}</h1>
      </Link>
      <div>{description}</div>
      <div>{price}</div>
    </div>
  )
}
