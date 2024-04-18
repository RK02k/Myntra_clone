// import {useDispatch, useSelector} from "react-redux"
// import { useEffect } from "react";
// import { itemsActions } from "../store/itemsSlice";
// import { fetchStatusActions } from "../store/fetchSlice";

// const FetchItems = () =>
// {
//     const fetchStatus = useSelector((store) => store.fetchStatus)
//     const dispatch = useDispatch();
//     // console.log(fetchStatus)
//     useEffect(()=>
// {
//     if(fetchStatus.fetchDone) return;

//     const controller = new AbortController();
//     const signal = controller.signal;
//      dispatch(fetchStatusActions.markFetchingStarted())
//   fetch('http://localhost:8080/items',{signal})
//   .then(res => res.json())
//   .then(({items}) => {
//     // console.log("Items fetched",items);
//      dispatch(fetchStatusActions.markFetchDone())
//      dispatch(fetchStatusActions.markFetchingFinished())
//     dispatch(itemsActions.addInitialItems(items))
//   });
  
//   return () =>{
//     controller.abort();
//   };
//   },[fetchStatus])
// }

// export default FetchItems;


// error fixing :-

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        if (fetchStatus.fetchDone) return;

        dispatch(fetchStatusActions.markFetchingStarted());

        const res = await fetch('http://localhost:8080/items', { signal });
        const { items } = await res.json();

        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
      } catch (error) {
        console.error('Error fetching items:', error);
        // Handle error state or dispatch an action to handle the error
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return null; // Since this component is just handling side effects, it doesn't need to render anything
};

export default FetchItems;
