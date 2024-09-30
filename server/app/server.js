
const express = require("express");
const axios = require('axios')
const app= express()
const cors = require('cors');
app.use(cors())
app.use(express.json());

const mail = require('./email');
 
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.post('/submit-data',async(data,res)=>{
     const url="https://script.google.com/macros/s/AKfycbxCXiTC_8qtBBEmu6JJul1LHtSWjmJKr-xDpsnar9r5arDacKAyZ0dRpEtbeNwwovoS5A/exec"
     
    const postData=
      {
        'name':data.body.name,
        'email':data.body.email,
        'phone':data.body.phone,
        'destination':data.body.destination,
        'date':data.body.date,
        'message':data.body.message
       }  
    

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: url,
      headers: { 
        'Content-Type': 'application/json', 
      },
      data : JSON.stringify(postData)
    };
    try{
        console.log('try');
        
       await axios.request(config).then(
        (response)=>{
            console.log(response.data);
            
         if(response.data === "Data received successfully"){
              res.send({num:"1"})
         }
         else{
          res.send({num:"0"})
         }
        }
       )
    }
    catch(e){
    console.log(e);
    
   }
   
  //  try{
  //   const mailres= mail.startMail(postData);
  //    console.log(mailres);
     
  //  }
  //  catch(e){
  //       console.log(e);
        
  //  }
    
})


