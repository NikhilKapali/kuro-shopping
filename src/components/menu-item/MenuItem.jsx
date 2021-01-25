import React from 'react'
import './menu_item.scss'

function MenuItem({title, imageUrl, size}) {
    return (
            <div className={`${size} menu-item`}>
            <div className="background__image"  style={{backgroundImage : `url(${imageUrl})`}}/>    
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <img />
                    <span className="subtitle">Wazzz upp</span>
                </div>
            </div>
    )
}

export default MenuItem
