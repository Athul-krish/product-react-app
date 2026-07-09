import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProduct from "./components/AddProduct"
import ViewAll from "./components/ViewAll"
import SearchProduct from "./components/SearchProduct"
import DeleteProduct from "./components/DeleteProduct"

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path="/search" element={<SearchProduct/>}></Route>
          <Route path="/delete" element={<DeleteProduct/>}></Route>
          <Route path="/viewall" element={<ViewAll/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
