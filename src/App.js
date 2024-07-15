import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import NotFount from './Component/NotFount/NotFount'
import About from './Component/About/About'
import Portifolio from './Component/Portfolio/Portifolio'
import Contact from './Component/Contact/Contact'



let routers = createBrowserRouter([
  {path:'' , element: <Layout/> , children:[
    
    {path : '*' , element: <NotFount/>},
    {index : true , element: <Home/>},
    {path : 'about' , element: <About/>},
    {path : 'portfolio' , element: <Portifolio/>},
    {path : 'contact' , element: <Contact/>},
  
  ]}
])


export default function App() {
  return<>
      <RouterProvider router={routers} ></RouterProvider>

  
  </>
}
