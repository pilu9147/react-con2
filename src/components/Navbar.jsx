import React, { useEffect, useState } from 'react';
import logoImage from '../assets/Standard Collection 11.png';
import logoIName from "../assets/KeazoNBOOKS.png";
import icon1 from "../assets/bx_bx-book-heart.png";
import icon2 from "../assets/ic_round-notifications-none.png";
import icon3 from "../assets/fluent_premium-person-20-regular.png";
import icon4 from "../assets/IMG20210528181544.png";
import '../index.css';
import axios from 'axios';

const Navbar = ({ setVideos,setarr }) => {
  const [search, setSearch] = useState("");
  async function fetchData() {
    try {
      let request = await axios.get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: search,
        },
      });
      console.log(request.data.items);
      setVideos(request.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function queryData() {
    
    let urls = [
        'https://www.googleapis.com/books/v1/volumes?q=harry+potter',
        'https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes'
      ];
  
      try {
        // Use Promise.all to make multiple requests concurrently
        const responses = await Promise.all(urls.map(url => axios.get(url)));
        
        // Extract and combine data.items from each response into a single array
        const combinedItems = responses.reduce((accumulator, currentResponse) => {
          if (currentResponse.data && Array.isArray(currentResponse.data.items)) {
            accumulator.push(...currentResponse.data.items);
          }
          return accumulator;
        }, []);
  
        console.log(combinedItems);
        setVideos(combinedItems);
      setarr(combinedItems.slice(0,3))
      } catch (error) {
        console.log(error);
      }
  }
  
  useEffect(() => {
    queryData();
  }, []);

  return (
    <div className='nav'>
      <div className="logo">
        <img src={logoImage} alt="logo" style={{ height: '30px', width: '50px' }} />
        <img src={logoIName} alt="logo1" style={{ height: '20px', width: '120px' }} />
      </div>

      <div className="search">
        <input
          type="text"
          placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={fetchData}>Search</button>
      </div>

      <div className="icons">
        <ul>
          <li><img src={icon1} alt="logo1" /></li>
          <li><img src={icon2} alt="logo1" /></li>
          <li><img src={icon3} alt="logo1" /></li>
          <li><img src={icon4} alt="logo1" style={{ height: '36px', width: '36px' }} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
