import React,{useState} from 'react'
import './index.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Card from './components/Card';

const App = () => {
  const[videos,setVideos] = useState([])
  const [arr,setarr] = useState([])
  return (
    <div className='main'>
    <Navbar setVideos = {setVideos} setarr={setarr}/>
    <Card arr={arr}/>
    <Books videos = {videos} />
    
    </div>
  )
}
export default App