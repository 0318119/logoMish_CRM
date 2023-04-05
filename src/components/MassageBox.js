import React, { useEffect, useState,useRef } from 'react'
import { BsFillEnvelopeFill as Mass_ico} from "react-icons/bs";
import ChatPicture from '../components/assets/images/chat/03.jpg'

function MassageBox() {
    const [isMasModal, setMasModal] = useState(false);
    const [childCount,setchildCount]=useState(null)
    const refOne = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", maybeHandler);
    }, [])

    const maybeHandler = (e) => {
        if (!refOne.current.contains(e.target)) {
            setMasModal(false)
        }
    }
    const handleModal = (e) => {
        setMasModal(current => !current)
       
    }
    useEffect(() => {
        var div = document.getElementById('scrollBoxMassModal11')
        setchildCount(div.childElementCount)   
    }, [])
    
    
  return (
    <>
        <div className="massBox" ref={refOne}>
            <span className='massBoxIco'>
                <Mass_ico onClick={handleModal}/>
            </span>
            <div className="massModal" id={isMasModal ? "showMassModal" : "hideMassModal"} >
                <div className="modalHeader">
                    <h6 className='massCount'>Massages <span>3</span></h6>
                </div>
                <div className="scrollBoxMassModal" id='scrollBoxMassModal11' 
                    style={{height:childCount==null||childCount<4?'fit-content':'250px',
                    overflowY:childCount==null||childCount<4?'hidden':'scroll'}}>

                    <div className="massContent">
                        <img src={ChatPicture} alt="" />
                        <div className="userContent">
                            <span className='userName'>Brianing Leyon</span>
                            <p className='userDescription'>You will sail along until you...</p>
                        </div>
                        <span className='counting'>5</span>
                    </div>
                    <div className="massContent">
                        <img src={ChatPicture} alt="" />
                        <div className="userContent">
                            <span className='userName'>Brianing Leyon</span>
                            <p className='userDescription'>You will sail along until you...</p>
                        </div>
                    </div>
                    <div className="massContent">
                        <img src={ChatPicture} alt="" />
                        <div className="userContent">
                            <span className='userName'>Brianing Leyon</span>
                            <p className='userDescription'>You will sail along until you...</p>
                        </div>
                    </div>
                </div>
                <div className="massFooter">
                    <a href="">View all massages</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default MassageBox