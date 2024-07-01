import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic(
        '1e88a76f-40c7-421c-9ac4-9efa0bf358a2', 
        props.user.username, 
        props.user.secret
    );

    return(
        <div style = {{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style = {{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage