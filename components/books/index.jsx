import React from 'react'

function Book({books, title}) {


  return (
    <>
      <h1 style={{paddingLeft: '24px'}}>{title}</h1>
      <div className="book-pages">
        {
        books.map((curItem, index) => {
          return (
            <div className="book-items" key={index}>
              <img width={300} src={curItem.Img} alt="" />
              <div className="book-title">
                <h1>{curItem.Name}</h1>
                <h2>{curItem.Price}</h2>
              </div>
              <div className="btn">
                <button>Buy Now</button>
                <button
                  style={{ backgroundColor: "#7c3c3c", padding: "7px 13px" }}
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