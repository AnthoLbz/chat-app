import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            online: props.online
        }
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="avatar"></img>

                <div>

                    <div className="name">{this.props.name}</div>


                    <div className="status" onClick={e => { this.state.online === false ? this.setState({ online: true }) : this.setState({ online: false }) }}>
                        <div className={this.state.online === false ? "status-offline" : "status-online"}></div>
                        <div className="status-text">{this.state.online ? "Online" : "Offline"}</div>
                    </div>

                </div>

            </div>

        )
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};
export default Contact
