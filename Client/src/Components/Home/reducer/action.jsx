import { actionTypes } from "./reducer";

export const setSearchType = (searchType) => ({
    type: actionTypes.SET_SEARCH_TYPE,
    payload: searchType,
  });
  
  export const setSearchText = (searchText) => ({
    type: actionTypes.SET_SEARCH_TEXT,
    payload: searchText,
  });
  
  export const setCapsules = (capsules) => ({
    type: actionTypes.SET_CAPSULES,
    payload: capsules,
  });
  
  export const setCurrentPage = (currentPage) => ({
    type: actionTypes.SET_CURRENT_PAGE,
    payload: currentPage,
  });
  
  export const setPaginatedData = (paginatedData) => ({
    type: actionTypes.SET_PAGINATED_DATA,
    payload: paginatedData,
  });

  export const setSearchResults = (results) => ({
    type: actionTypes.SET_SEARCH_RESULTS,
    payload: results,
  });

  export const setSearch = (bull)=>({
    type : actionTypes.SET_SEARCH,
    payload: bull,

  })

  export const setPopup = (bull)=>({
    type : actionTypes.SET_POPUP,
    payload:bull
  })

  export const setPopUpId = (id)=>({
    type : actionTypes.SET_POPUPID,
    payload:id
  })
