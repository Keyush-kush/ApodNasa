import React from 'react'

function Sidebar(props) {
  const {handletogglemodel,data} = props;
  return (
    <div className='sidebar'>  
      <div onClick={handletogglemodel}
      className='bgOverlay'></div>
      <div className='sidebarContent'>
      <h2>{data?.title}</h2>
      <div className='sideContent'>
        <p className='DIS'>{data?.date}</p>
        <p>{data?.explanation}</p>
      </div>
      <button onClick={handletogglemodel} >
      <i className="fa-solid fa-right-to-bracket"></i>
      </button>
    </div>
    </div>
  )
}

export default Sidebar