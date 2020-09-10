import React from 'react';
import './Message.css';


function Message() {
    return <div className="Message">
    <div className="message_top">   
        <h1>What's up with you?</h1>
            </div>
            <div className="message_bottom">
                <form>
                    <input type="text" placeholder={'please enter'}/>
                    
                    </form>
                    <input type="submit" value="POST"></input>
                    
                    
                </div>
        </div>; 
}

export default Message
