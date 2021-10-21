import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Topbar from './Topbar/Topbar'

function SinglePage() {
    return (
        <>
            <Topbar></Topbar>
            <div className="containerr">
            <Sidebar></Sidebar>
            <div className="others">
            Market Place
                <div className="reklam">
                    Market Place
                </div>
            </div>
        </div>
       </>
    )
}

export default SinglePage
