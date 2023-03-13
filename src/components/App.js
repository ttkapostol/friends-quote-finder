import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';

function App() {

   const [data, setData] = useState(quotes);
   /*const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });*/

  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('Todos');  


  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const handleSearchInput = (ev) => {
    setSearchInput(ev.target.value);
  };



  const renderList = () => {
      return data
        .filter((eachQuote) => {
          return (
            eachQuote.character.toLowerCase().includes(searchInput.toLowerCase()) ||
            eachQuote.quote.toLowerCase().includes(searchInput.toLowerCase())
  )
        .filter((eachQuote) => eachQuote.character === search || search === 'Todos')    
  })
        .map((eachQuote, i) => (
          <li className="quote_item" key={i}>
            <p className="quote__content">
              <label className="quote__label">The Quote</label>
              {eachQuote.quote} {eachQuote.character}
            </p>
          </li>
        ));
  };  
 
 
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
          <option value="Todos">Todos</option>
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
          //onInput={handleNewQuote}
          //value={newQuote.quote}
          />
        <input
          className="addQuote__form--input"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Apellidos"
          //onInput={handleNewQuote}
          //value={newQuote.character}
            />
      </form>      
    </main>  
  </div>
  );
}

export default App;
