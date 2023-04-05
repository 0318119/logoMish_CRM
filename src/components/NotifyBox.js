import React, { useEffect, useState, useRef } from 'react'
import { MdNotificationsNone as Notify_ico} from "react-icons/md";
import ChatPicture from '../components/assets/images/chat/03.jpg'

function NotifyBox() {
    const [isMasModal, setMasModal] = useState(true);
    const [childCount,setchildCount]=useState(null)
    const refOne = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", maybeHandler);
    }, [])

    const maybeHandler = (e) => {
        if (!refOne.current.contains(e.target)) {
            setMasModal(true)
        }
    }
    const handleModal = () => {
        setMasModal(current => !current)
    }

    useEffect(() => {
        var div = document.getElementById('scrollBoxNotifyModal11')
        setchildCount(div.childElementCount)   
    }, [])


    return (
        <>
            <div className="notifyBox" ref={refOne}>
                <span className='notifyBoxIco'>
                    <Notify_ico onClick={handleModal} />
                    <span className='notificateCount'>5</span>
                </span>
                <div className="notifyModal" id={isMasModal ? "hideNotifyModal" : "showNotifyModal"}>
                    <div className="modalHeader">
                        <h6 className='notifyCount'>Notifications <span>3</span></h6>
                        <button>clear all</button>
                    </div>
                    <div className="scrollBoxNotifyModal" id='scrollBoxNotifyModal11'
                        style={{height:childCount==null||childCount<4?'fit-content':'250px',
                        overflowY:childCount==null||childCount<4?'hidden':'scroll'}}>
                        <div className="notifyContent">
                            <img src={ChatPicture} alt="" />
                            <div className="userContent">
                                <span className='userName'>Brianing Leyon</span>
                                <p className='userDescription'>You will sail along until you...</p>
                            </div>
                        </div>
                        <div className="notifyContent">
                            <img src={ChatPicture} alt="" />
                            <div className="userContent">
                                <span className='userName'>Brianing Leyon</span>
                                <p className='userDescription'>You will sail along until you...</p>
                            </div>
                        </div>
                        <div className="notifyContent">
                            <img src={ChatPicture} alt="" />
                            <div className="userContent">
                                <span className='userName'>Brianing Leyon</span>
                                <p className='userDescription'>You will sail along until you...</p>
                            </div>
                        </div>
                        <div className="notifyContent">
                            <img src={ChatPicture} alt="" />
                            <div className="userContent">
                                <span className='userName'>Brianing Leyon</span>
                                <p className='userDescription'>You will sail along until you...</p>
                            </div>
                        </div>
                    </div>
                    <div className="notifyFooter">
                        <a href="">View all notifications</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotifyBox