import React from 'react'
import s from './Message.module.scss'

type messageDataType = {
    avatar: string
    name: string,
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={s.messageInner}>
            <img className={s.img} src={props.avatar} alt=""/>
            <div className={s.massageWrap}>
                <div className={s.massageName}>{props.name}</div>
                <p className={s.massageText}>{props.message}</p>
                <div className={s.massageTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
