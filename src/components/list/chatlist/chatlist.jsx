import { useState } from "react"
import "./chatlist.css"

const chatlist =()=>{
    const[addMode,  setAddMode]=useState(false)
    return(
        <div className='chatlist'>
            <div className="search">
              <div className="searchbar">
                <img src="/search.png" alt=""/>
                <input type="text" placeholder="Search" />
                </div>  
                <img src={addMode ?"./minus.png":"./plus.png"} alt="" className="add"
                onClick={()=>setAddMode((prev)=>!prev)}/>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts"></div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts"></div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts"></div>
            </div>
            
        </div>
    )
}


export default chatlist