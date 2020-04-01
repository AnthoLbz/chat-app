import React, { Component } from 'react'
import './contact.css'

class contact extends Component {
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src="https://randomuser.me/api/portraits/women/82.jpg"></img>
                <div>
                    <div className="name">Crystal Lawrence</div>
                    <div className="status">
                        <div className="status-online"></div>
                        <div className="status-text">online</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default contact
