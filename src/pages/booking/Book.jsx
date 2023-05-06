import React from 'react'
import "./book.css"
const Book = () => {
  return (
    <>
    <div className="loginPage">
    <div className="form-box">
      <h1>Book Show</h1>
      <form  >
       <div >
       <div className="input-field">
          <input type="text" placeholder="Name"  name="name" />
         </div>
         <div className="input-field">
          <input className="input" type="email" placeholder="Email"  name="email"/>
         </div>
         <div className="input-field">
          <input className="input" type="password" placeholder="Password"  name="password" />
         </div>
         <div className="input-field">
          <input type="text" placeholder="Show name"  name="Show name" />
         </div>
         <div className="input-field">
          <input type="date" placeholder="date"  name="date" />
         </div>
         <div className="btn-field">
         <button type="submit" > Submit</button>
       
       </div>

       </div>
      </form>
    </div>
  </div>
    
    </>
  )
}

export default Book
