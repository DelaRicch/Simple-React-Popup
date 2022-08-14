import React from 'react'
import { MdClose } from "react-icons/md";
import './Popup.css'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}><MdClose /></button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup