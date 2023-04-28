import React,{useState, useEffect} from 'react'
import '../App.css'
import Header from './Header';
import axios from 'axios';

import CardGroup from './CardGroup';


const Website = () => {
    const [loading, setLoading] = useState(true) 
const [data, setData] = useState([])
const [error, setError] = useState(null)

useEffect(() => {
    setLoading(true)
    axios.get(`https://swapi.dev/api/films`)
    .then(response => {
        setData(response.data.results)
        setLoading(false)
    })
    .catch(error => {
        setError(error)
        setLoading(false)
    })

}, []);
   
if (error){
    return <div>Error: {error.message} </div>
}

      return (
        
        <div className="wrapper">
       <Header />
            { loading ?   <img src="assets/loader.svg" alt="loader_img" className="loader-img" /> 
            :  data.length > 0  ? 
    
              <CardGroup movies={data}  />
        :  <div>No movies</div> }
        </div> 
        
      ) } 
    
export default Website;
