import React from 'react';

import '../components/Chat.css';
import SockJS from 'sockjs-client';

const sock = new SockJS("http://10.40.10.77:8080/chatting");

sock.onopen = () => {
    console.log('소켓 Open');   
}
sock.onmessage = (data) => {
    console.log('소켓 메세지');
    var msg = data.data;
    if(msg !== null){
        document.getElementById("chating").append(msg);
    }
}

export function send() {
    console.log('소켓 send');
    var msg = document.getElementById("chatting").value;
    console.log('msg : ' + msg);
    sock.send(msg);
    document.getElementById("chatting").value = "";
}

const Chat = () => {
    return (
        <div id="container" className="container">
            <h1>채팅</h1>
            <div id="chating" className="chating">
            </div>
            <div id="yourMsg">
                <div className="inputTable">
                    <div>
                        <div className="inputMsg">
                            <span className="inputMsgTitle">메시지</span>
                        </div>
                        <div className="inputMsg">
                            <input id="chatting" placeholder="보내실 메시지를 입력하세요." />
                        </div>
                        <div className="inputMsg">
                            <button id="sendBtn" className="btn-send-msg" onClick={send}>보내기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;