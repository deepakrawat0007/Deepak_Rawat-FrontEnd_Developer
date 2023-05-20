import React from 'react';

const SearchBar = ({ searchType, searchText, handleChange, handleSearch, handleReset }) => {
    const handlePlaceHolder =(search_types)=>{
       switch(search_types){
          case "status":
            return 'Retired / Active / Unknown'
          case "type":
            return 'Dragon 1.1'
        case "original_launch":
            return '2020-01-19T14:00:00.000Z'
        default :
        return "Select Type"
       }
    } 

  return (
    <div className="search_bar">
      <h2> Search Form</h2>
      <form>
        <div className="form_input">
          <label htmlFor="search_types">Select Search types</label>
          <select
            id="search_types"
            value={searchType}
            onChange={(e) => handleChange('SEARCH_TYPE', e)}
          >
            <option value="def">Select</option>
            <option value="status">Status</option>
            <option value="type">Type</option>
            <option value="original_launch">Original Launch</option>
          </select>
        </div>
        <div className="form_input">
          <label>Enter Type Details</label>
          <input
            type="text"
            placeholder={handlePlaceHolder(searchType)}
            value={searchText}
            onChange={(e) => handleChange('SEARCH_TEXT', e)}
          />
        </div>
        <div className="form_input">
          <button onClick={(e) => handleSearch(e)}>Search</button>
          <button onClick={(e) => handleReset(e)}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
