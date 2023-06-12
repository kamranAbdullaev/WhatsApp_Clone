import React from 'react'
import { HiOutlineSearch, HiOutlineDotsVertical,HiOutlineEmojiHappy,HiOutlinePaperClip,HiMicrophone} from "react-icons/hi";
import './ChatMessage.scss';

function ChatMessage(props) {
	console.log(props);
	return (
		
      <section className="right">
			<div className="chat-head">
				<img alt="profilepicture" src={props.obj.avatar} />
					<div className="chat-name">
						<h1 className="font-name">{props.obj.name}</h1>
					<p className="font-online">onli</p>
								</div>
								<i aria-hidden="true"><HiOutlineSearch/></i>
								<i aria-hidden="true"><HiOutlineDotsVertical/></i>
						</div>
						<div className="wrap-chat">
								<div className="chat"></div>
								<div className="information"></div>
						</div>
						<div className="wrap-message">
              <i aria-hidden="true"><HiOutlineEmojiHappy /></i>
              <i aria-hidden="true"><HiOutlinePaperClip/></i>
								<div className="message">
										<input type="text" className="input-message" placeholder="Введите сообщение"/>
								</div>
								<i aria-hidden="true"><HiMicrophone/></i>
						</div>
				</section>
  )
}

export default ChatMessage;