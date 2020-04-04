import React from 'react'
import PropTypes from 'prop-types';
import './contact.css'

const Contact = ({ avatar, name, online }) => (
    <div className="Contact">
        <img className="avatar" src={avatar} alt= "random person" />
        <div>
            <div className="name">{name}</div>
            {online ? (
                <div className="status">
                    <i className="status-online" />
                    <span className="status-text">Online</span>
                </div>) 
                : 
            (<div className="status">
                <i className="status-offline" />
                <span className="status-text">Offline</span>
            </div>)}
        </div>
    </div>
);

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};
export default Contact
