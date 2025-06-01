import { useEffect, useState } from "react"


export const DateTime = () => {

    const [dateTime, setDateTime] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
        //todo date - time
        const dateTime = new Date()
        const date = dateTime.toLocaleDateString()
        const time = dateTime.toLocaleTimeString('en-US', { hour12: true })
        setDateTime(`${date} - ${time}`)

        return () => clearInterval(interval)

    }, 1000)
    }, [])

    return (
        <h2 className='date-time'> {dateTime} </h2>
    )
}