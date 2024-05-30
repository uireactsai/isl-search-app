import React, { useState } from 'react';
import signData from './data.json';
import './App.css'; 

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const searchWord=searchTerm.split("");

    const results = signData.signs.filter(sign =>
      searchWord.some(term =>
        sign.name.toLowerCase().includes(term.trim().toLowerCase())
      )
    );
    setSearchResults(results);
  };

  return (
   <>
    <div className="App">
      <h1>ISL App</h1>
      <input
        type="text"
        placeholder="enter words"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      <div className="sign-results"> 
        {searchResults.length===0 ? (
          <p>enter letters only</p>
        ):(
        searchResults.map((sign, index) => (
          <div key={index} className="sign-card">
            <h2>{sign.name}</h2>
            <img src={require(`/Users/saisubhash/sign/public/images/${sign.image}`)
            .default} alt={sign.name} />

          </div>)
        ))}
      </div>
    </div>
    </>
  );
}

export default App