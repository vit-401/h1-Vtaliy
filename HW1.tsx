import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

type messageDataType = {
    avatar: string
    name: string,
    message: string
    time: string
}

const messageData: messageDataType = {
    avatar: 'https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZsqA1ZNIF_p454AqcE4Zs0mTGBVjYMoeTA&usqp=CAU'}
                name={'Vitaliy'}
                message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut corporis delectus dolor eligendi impedit ipsam itaque iure maxime, nihil, placeat quae quasi rem reprehenderit veritatis. Ab eveniet itaque officiis.'}
                time={'15.03.21'}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}
export default HW1
