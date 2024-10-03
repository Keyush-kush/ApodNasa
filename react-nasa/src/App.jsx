import Main from './Components/Main'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import { useEffect, useState } from 'react'

function App() {
const [data,setData]=useState(null)
const [loading,setLoading]=useState(false)
 const [showModal,setShowModal]=useState(false)

 function handletogglemodel(){
  setShowModal(!showModal)
 }

 useEffect(() => {
  async function fetchAPIData() {
    const NASA_KEY = 'Api key'
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;
    
    const today =(new Date()).toDateString()
    const localKey=`NASA-${today}`
    if (localStorage.getItem(localKey)) {
      const apiData=JSON.parse(localStorage.getItem(localKey))
      setData(apiData)
      console.log('Fetched from caxhe today')
      return
    }
    localStorage.clear()
    

    
    try {
      const res = await fetch(url);
      const apidata= await res.json();
      localStorage.setItem(localKey, JSON.stringify(apidata));
      setData(apidata);
      console.log('fetched from apo today');
    } catch (err) {
      console.log(err.message);
    }
  }
  fetchAPIData();
}, []);

  return (
    <>
    {data ?(<Main data={data}/>):(
      <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
      </div>)}
    {showModal && (
      <Sidebar data={data} handletogglemodel={handletogglemodel}/>)}
{ data && (  <Footer data={data} handletogglemodel={handletogglemodel}/>
)}      
    </>
  )
}


export default App
