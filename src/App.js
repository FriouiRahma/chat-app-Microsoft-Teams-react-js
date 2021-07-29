import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

const App=()=>{
    return(
        <ChatEngine  
        height="100vh"
        projectID="0c313b42-3677-4c1c-a428-61a08b293f3d"
        userName="javascriptmastery"
        userSecret="Rahmareact123"
        renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps}/>}
        />

    )
}

export default App;