import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from "./City"

function App() {
  const key ="a4046b031f9a01ce40a0aa6440ccb1a5";
  const [search, setSearch] = useState();
  const [city, setCity] = useState();
  useEffect(() =>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search]);
  return (
    <div className="App">
      <div>
        <input 
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border-8 bg-slate-500"
          placeholder="Şehir giriniz"
          className="px-3 w-[250px] py-3 placeholder-blueGray-600 bg-white border-2 rounded-md"
        />
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
