import React from 'react'
import s from './Message.module.css'
import {MessageOneType, MessageType, userType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img alt="Hometask №1"
                     src="https://bipbap.ru/wp-content/uploads/2021/07/likee_avatarka.jpg"
                     id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    //
                />
                <br/>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        Anya
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        some text
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                9.04
                {/**/}
            </div>
        </div>
    )
}

export default Message
