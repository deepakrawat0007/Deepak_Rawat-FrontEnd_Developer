
export const initialState = {
    itemsPerPage:10,  // for setting files per page
    searchType: "",   // storing search type
    searchText: "",   // storing serach text
    capsules: [],     // all files
    currentPage: 1,    // current page Num
    paginatedData: [],  // data in page num wise
    searchResults: [],  // search results
    Search:false ,       // if serach button clicked
    popUp: false,        // if file clicked or not
    popUpId :""         // storing the id for the clicked file
  };
  
  export const actionTypes = {
    SET_SEARCH_TYPE: "SET_SEARCH_TYPE",
    SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
    SET_CAPSULES: "SET_CAPSULES",
    SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
    SET_PAGINATED_DATA: "SET_PAGINATED_DATA",
    SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
    SET_SEARCH:"SET_SEARCH",
    SET_POPUP:"SET_POPUP",
    SET_POPUPID:"SET_POPUPID"
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_SEARCH_TYPE:
        return { ...state, searchType: action.payload };

      case actionTypes.SET_SEARCH_TEXT:
        return { ...state, searchText: action.payload };

      case actionTypes.SET_CAPSULES:
        return { ...state, capsules: action.payload };

      case actionTypes.SET_CURRENT_PAGE:
        return { ...state, currentPage: action.payload };

      case actionTypes.SET_PAGINATED_DATA:
        return { ...state, paginatedData: action.payload };

       case actionTypes.SET_SEARCH_RESULTS:
        const searchResults = action.payload;
        return {
          ...state,
          searchResults,
          currentPage: 1,
        }

        case actionTypes.SET_SEARCH:
            return {...state , Search: action.payload};
        
        case actionTypes.SET_POPUP:
          return {...state , popUp:action.payload};
          
        case actionTypes.SET_POPUPID:
          return {...state , popUpId: action.payload};

      default:
        return state;
    }
  };