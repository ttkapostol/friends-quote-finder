import '../styles/App.scss';
//import quotes from '../data/quotes.json';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';

function App() {

   const [quotes, setQuotes] = useState([]);
   
   const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });

  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('Everybody');  

  useEffect(() => {
    callToApi().then((response) => {
      setQuotes(response);
    });
  }, []); 

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSearchInput = (ev) => {
    setSearchInput(ev.target.value);
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
  setNewQuote({ ...newQuote, [inputName]: inputValue });  
  };

  const handleNewQuote = (ev) => {
  ev.preventDefault();
  setQuotes([...quotes,newQuote]);
  setNewQuote({
  quote:'',
  character:'',
  })
}

  const renderList = () => {
      return quotes
        .filter ((eachQuote) => {
        return (
            eachQuote.character.toLowerCase().includes(searchInput.toLowerCase()) ||
            eachQuote.quote.toLowerCase().includes(searchInput.toLowerCase()));
      })

      .filter ((eachQuote) => {
        if (search === 'Everybody') {
            return true
        } else {
            return eachQuote.character === search    
        }    
      })
        .map((eachQuote, i) => {
          return (
          <li className="quote_item" key={i}>
            <p className="quote__content"> {eachQuote.quote} 
              <span> {eachQuote.character}
              </span>
            </p>
          </li>          
    )}
    );
   
  return (
    <div className="App">
    <header className='header'>
      <h1 className='header__title'>Friends' Quotes</h1>
      <form className='header__form'>
        <label className='header__search1'> 
          Who said what?!
        </label>  
        <input
          className="header__search1--byContent"
          autoComplete="off"
          placeholder="Look for your favourite quote"
          type="search"
          name="search"
          onInput={handleSearchInput}
          value={searchInput}
        />

      <label className="header__search2">
          Look for your favourite quote by character 
      </label>
        <select
          className="select header__search2--byCharacter"
          value={search}
          name="character"
          id="character"
          onChange={handleSearch}
        >
          <option value="Everybody">Everybody</option>
          <option value="Chandler">Chandler</option>
          <option value="Joey">Joey</option>
          <option value="Monica">Monica</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Rachel">Rachel</option>
          <option value="Ross">Ross</option>
        </select>    
      </form>
    </header>

    <main>
    <ul className='listOfQuotes'>
      {renderList}
    </ul>

    <form className="addQuote__form">
            <h2 className="aadQuote__form--title">Add a new quote!</h2>
        <input
          className="addQuote__form--input"
          placeholder="Add your favourite quote"
          type="text"
          name="quote"
          id="quote"
          onInput={handleNewQuote}
          value={newQuote.quote}
          />
        <input
          className="addQuote__form--input"
          type="text"
          name="character"
          id="character"
          placeholder="Character"
          onInput={handleNewQuote}
          value={newQuote.character}
            />
      </form>      
    </main>  
  </div>
  );
}

export default App;
