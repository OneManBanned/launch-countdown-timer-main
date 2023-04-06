import { forwardRef } from 'react'
import { StyledCard } from "./styles/Countdown.styled"

export default forwardRef(function Card({ period, time, ref }) {
    return (
        <StyledCard>
            <div className="card">
                <div className="num-container">{String(time).length < 2 ? `0${time}` : time}</div>
                <div className="top-of-card"></div>
                <div className="bottom-of-card"></div>
            </div>
            <span className="text">{period.toUpperCase()}</span>
        </StyledCard>
    )
})
