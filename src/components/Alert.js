import React, {useEffect} from 'react'
import "./css/Alert.css"

export default function Alert(props) {
  return (
    props.alert && <div className="alert">
        {/* <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>  */}
        <span className="closebtn" onClick={()=>{document.querySelector('.alert').classList.add('closedbtn')}}><i className="fa-solid fa-xmark"></i></span> 
        <strong>Success!</strong> Your product is added to cart successfully.
    </div>
  )
}
