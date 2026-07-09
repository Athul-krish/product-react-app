import React from 'react'
import Navbar from './Navbar'

const SearchProduct = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-1">
                <div className="row">
                    <div className="col col-12">

                            <label htmlFor="" className="form-label">Search Product Code:</label>
                            <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12">
                            <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
      </div>2
    </div>
  )
}

export default SearchProduct
