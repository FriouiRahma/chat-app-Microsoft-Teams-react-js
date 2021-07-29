import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

function ChatFeed(props) {
    const { chats, activeChat, userName, messages } = props
    const chat = chats && chats[activeChat]
    const renderMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessagekey = index == 0 ? null : keys[index - 1]
            const isMymessage = userName == message.sender.userName
            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className='message-block'>
                        {
                            isMymessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessagekey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMymessage ? "18px" : "0px", marginLeft: isMymessage ? "0px" : "68px" }}>
                        read-receipt
                    </div>

                </div>
            )


        })
    }

    if (!chat) return 'Loading...'

    console.log("chat", chat, "userName", userName, "messages", messages)
    return (
        <div className="chat-feed">
            <div className='chat-title-container'>
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.peaple.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: "100px" }} />
            <div className="message-form-container"></div>
            <MessageForm  {...props}  chatId={activeChat} />

        </div>
    )
}

export default ChatFeed
