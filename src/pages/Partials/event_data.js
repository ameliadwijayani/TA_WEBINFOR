import React from 'react'
import Axios from "axios"

export default function Event_data() {
    const [dosen,setDosen]=React.useState([])
    
    React.useEffect(()=>{
       
        Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_dosen_recent")
        .then(result => {
          console.log(result.data.data)
          setDosen(result.data.data)
        })
        .catch(err => {
          
        })
      
    },[])

  return (
    <div>event_data</div>
  )
}
