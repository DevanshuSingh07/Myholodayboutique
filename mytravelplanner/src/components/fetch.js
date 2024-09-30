import axios from "axios"

async function sendForm(data){
    try{
        const postData={
            'name':data.name,
            'email':data.email,
            'phone':data.phone,
            'destination':data.destination,
            'date':data.date,
            'message':data.message
           }
            
              
           const val= await axios.post('http://localhost:3002/submit-data',postData)
           console.log(val.data);
            return val.data
           
            
    }
    catch(e){
        console.log("error box");
        
        return e
    }
   
   
}

export default sendForm;