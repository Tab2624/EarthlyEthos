import React from 'react'

const CategoryBox = (props) => {
  return (
    <div id="product" className="m-1 border rounded p-3">
      <div className="width-300">
        <img
          src={props.category.imageURL}
          className="width-300 height-300"
          alt={props.category.name}
        />
        <div className="mt-3">
          <h5>
            {props.category.name}
          </h5>
          <hr />
          <div className="d-flex justify-center">
            <button className="btn btn-primary shadow">View Category</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryBox