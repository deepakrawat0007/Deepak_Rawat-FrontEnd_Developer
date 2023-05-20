import React, { useContext, useEffect, useReducer } from 'react';
import axios from "axios";
import "./page.css"
import { initialState, reducer } from './reducer/reducer';
import fileIcon from "../../assets/icons8-spaceship-launch-documentation-100.png"
import ToastContext from "../context/ToastContext"
import { setCurrentPage, setCapsules, setSearchText, setPaginatedData, setSearchType, setSearchResults, setSearch, setPopup, setPopUpId } from './reducer/action';
import HeadBanner from './HeadBanner';
import SearchBar from './SearchBar';
import Popup from './PopUpModal/Popup';


const Home = () => {
  const { toast } = useContext(ToastContext)  // toast from toast context
  const [state, dispatch] = useReducer(reducer, initialState);
  const { searchType, searchText, capsules, currentPage, paginatedData, searchResults, Search, itemsPerPage, popUp, popUpId } = state; //all initial states values

  useEffect(() => {   // Fteching all the capsules data
    // console.log(import.meta.env.VITE_APITOKEN)
    axios.get("http://localhost:5000/api/v3/capsules",
      { headers: { Authorization: import.meta.env.VITE_APITOKEN } }) // APITOKEN For Auth..
      .then((res) => {
        console.log(res.data)
        dispatch(setCapsules(res.data.capsules));
      })
      .catch((e) => {
        toast.error("Falied TO Load Data's")
      })
  }, [])

  useEffect(() => {  // pagination logic
    // Calculate the start and end indices of the items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let slicedData;
    if (!Search) {    // if search is false slicing capsules
      slicedData = capsules.slice(startIndex, endIndex);
    } else {          // else slicing from search results
      slicedData = searchResults.slice(startIndex, endIndex);
    }
    dispatch(setPaginatedData(slicedData));

  }, [currentPage, capsules, searchResults]);

  // Handle pagination controls
  const goToPage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handleSearch = (e) => { // search of datas
    e.preventDefault()
    dispatch(setSearch(true))

    const results = capsules.filter((item) => {
      switch (searchType) {
        case 'status':
          return item.status.toLowerCase().includes(searchText.toLowerCase());
        case 'type':
          return item.type.toLowerCase().includes(searchText.toLowerCase());
        case 'original_launch':
          return String(item.original_launch).includes(searchText);
        default:
          return false;
      }
    });
    // console.log(results)
    dispatch(setSearchResults(results));
    toast.success(`${results.length} records Found`)

  };

  const handleReset = (e) => {  // Reset the filter settings
    e.preventDefault()
    toast.success("filter Reset Success")
    dispatch(setSearchType('def'));
    dispatch(setSearchText(''));
    dispatch(setSearch(false))
    dispatch(setSearchResults([]));
  };

  const handleChange = (input, e) => {
    switch (input) {
      case "SEARCH_TYPE":
        return dispatch(setSearchType(e.target.value))
      case "SEARCH_TEXT":
        return dispatch(setSearchText(e.target.value))
    }
  }

  const handlePopUp = (idx) => {
    dispatch(setPopup(true))
    dispatch(setPopUpId(idx))
  }
  const closePopup = () => {
    dispatch(setPopup(false));
  }

  return (<>
    <HeadBanner />
    <SearchBar
      searchType={searchType}
      searchText={searchText}
      handleChange={handleChange}
      handleSearch={handleSearch}
      handleReset={handleReset}
    />


    <div className="cards">
      {paginatedData?.map((items, idx) => (<div key={idx} className='card' onClick={() => handlePopUp(items.capsule_serial)}>
        <img src={fileIcon} alt='fileIcon' />
        <div ><b>Capsule Serial: </b>{items.capsule_serial}</div>
      </div>
      ))}
    </div>
    {popUp ? (<div className='popup'><Popup closePopup={closePopup} popUpId={popUpId} capsules={capsules} /></div>) : ''}
    <div className='btn_page'>
      <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      <span style={{ color: "white", fontSize: "1.5em", fontWeight: "700" }}>{currentPage}</span>
      <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === Math.ceil((searchResults.length ? searchResults.length : capsules.length) / itemsPerPage)}>Next</button>
    </div>
  </>
  )
}


export default Home;