import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './routes/App'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Bag from "./routes/Bag.jsx"
import Home from './routes/Home'
import { Provider } from 'react-redux'
import myntraStore from './store'
import "bootstrap/dist/css/bootstrap.min.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    children: [
      { path: "/", element: <Home/> }, // Include PostList component as a child ,loader:postloader
      { path: "/bag", element: <Bag /> } // Include CreatePost component as a child ,action:createPostAction
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
