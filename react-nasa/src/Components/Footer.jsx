import React from 'react'

function Footer(props) {

  const {showModal,handletogglemodel,data} = props;
  return (
    <footer>
      <div className='bgGradiant'></div>
    <div>
      <h1>Apod project</h1>
      <h2>{data?.title}</h2>
      
      
      </div>
      <button onClick={handletogglemodel}>
        <i className="fa-solid fa-info">
          </i></button>
      </footer>
      
  )
}

export default Footer