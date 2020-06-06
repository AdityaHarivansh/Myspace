import React, { Component } from 'react'
import '../Stylesheets/ChatBox.scss'

export default class ChatBox extends Component {
    render() {
        return (
            <div className="Chat-box-container">
                <div className="row Chats">
                <div className="Chat-my-text">
                    Hi! As a student I have alot of anxiety issues, Any tips to fight anxiety?
                </div> 
                </div>
                <div className="row Chats-reply">
                <div className="Chat-text-reply">
                    Shout it out, Get moving, Breakup with caffeine, Give yourself a bedtime, Feel ok saying no, Don't skip meals
                    
                </div> 
                </div>
                <div className="row">
                    <textarea className="Chat-box-text-wrap" name="Chat"></textarea> 
                    <i className="far fa-paper-plane send-button"></i>
                </div>
            </div>
        )
    }
}
