import { Container } from "postcss";
import Banner from "../components/banner";
import { useState } from "react";
import travelPackages from "../content/Travelpackages";
import Searchresult from "../components/Searchresult";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import FeaturedDeals from "../components/FeaturedDeals";
import TravelBlog from "../components/TravelBlog";
import Form from "../components/Form";
export default function Home(){
   
    const[ searchActive, setsearchActive]= useState(false)
    const[searchvalue, setsearchvalue]= useState('')
    const[test,settest]= useState(0);
    const handleSearch = (input)=>{
        
      const filtered=  travelPackages.filter(item=>(item.destination.toLocaleLowerCase().includes(input.toLocaleLowerCase())))
           setsearchActive(true)

           if(input == ''){
            console.log('home if')
              setsearchActive(false)
           }

        setsearchvalue(filtered)
    }
      
  
    return(<>
        <Banner onSearch ={handleSearch}/>
        
        <Searchresult showdata={searchvalue} active={searchActive}/>

        <Services img={searchvalue}/>
        <About/>
        <FeaturedDeals/>
        <TravelBlog/>

        <Testimonials/>
        <Form/>
        </>
    )
}