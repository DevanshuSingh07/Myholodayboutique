import Travelpackages from '../content/Travelpackages'

const Card =({data,active})=>{
   
    if(data && active){
      return(
         <div className="card-p px-4">   
                 {
                
            data.map((item)=>(
             <div className=" grid grid-cols-2 gap-4 justify-center item-center mb-5">
              <div key={item.id} className='img-box'>
                 <img src={item.image} alt="" className="md:h-[30em] md:w-[500px] h-auto w-[20em] py-5 object-cover bg-white shadow-lg"/>
                 <h1 className='text-center'>{item.destination}</h1>
                 
              </div>
              <div className="text-box content-center">
                 <h1 className='font-playpen '>{item.description}</h1>
              </div>
              </div>
 
            ))}
         </div>
       
     )
    }
   else{
      return(
         <div className="empty"></div>
      )
   }
   
}

export default Card;