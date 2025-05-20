import React from 'react'

function Book({books, title}) {


  return (
    <>
      <h1>{title}</h1>
      <div className="book-pages">
        {
        books.map((curVal, index) => {
          return (
            <div className="book-items" key={index}>
              <img width={300} src={curVal.Img} alt="" />
              <div className="book-title">
                <h1>{curVal.Name}</h1>
                <h2>{curVal.Price}</h2>
              </div>
              <div className="btn">
                <button>Buy Now</button>
                <button
                  style={{ backgroundColor: "red", padding: "12px 24px" }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div> 
    </>
  )
}

export default Book;