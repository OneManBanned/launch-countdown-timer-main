import { useState, useEffect, useRef } from 'react'
import Card from './Card'


export default function Countdown() {

    const [cardData, setCardData] = useState([])

    const [countDownDate, setCountDownDate] = useState(new Date().getTime() + 1209600000)

    let interval;

    const startTimer = () => {

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
            const seconds = Math.floor(distance % (60 * 1000) / (1000));

            if (distance < 0) {
                // Stop Timer
                clearInterval(interval.current)
            } else {
                // Update Timer
                setCardData([{
                    key: 1,
                    period: 'days',
                    time: days
                },
                {
                    key: 2,
                    period: 'hours',
                    time: hours
                },
                {
                    key: 3,
                    period: 'minutes',
                    time: minutes
                },
                {
                    key: 4,
                    period: 'seconds',
                    time: seconds
                }])
            }
        })
    }

    useEffect(() => {
        startTimer();
    });

    const cardRef = useRef(null)

    return (
        <main>
            <h1>
                <strong>WE'RE LAUNCHING SOON</strong>
            </h1>
            <div style={{ display: 'flex' }}>
                {cardData.map(item => (
                    <Card key={item.key}
                        ref={cardRef}
                        period={item.period}
                        time={item.time}
                    />
                ))}
            </div>
        </main>
    )
}