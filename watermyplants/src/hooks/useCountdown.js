import { useState, useEffect } from "react";

const msPerMinute = 1000 * 60;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;

const useCountdown = (calculateMsLeft) => {

    const [timeLeft, setTimeLeft] = useState(calculateMsLeft());
    const calculateSecondsLeft = () => Math.floor((timeLeft % msPerMinute) / 1000);
    const calculateMinutesLeft = () => Math.floor((timeLeft % msPerHour) / msPerMinute);
    const calculateHoursLeft = () => Math.floor((timeLeft % msPerDay) / msPerHour);
    const calculateDaysLeft = () => Math.floor(timeLeft / msPerDay);
    
    const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());
    const [hoursLeft, setHoursLeft] = useState(calculateHoursLeft());
    const [minutesLeft, setMinutesLeft] = useState(calculateMinutesLeft());
    const [secondsLeft, setSecondsLeft] = useState(calculateSecondsLeft());
    
    const [secondsPassed, setSecondsPassed] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsPassed((prevSeconds) => prevSeconds + 1);
        }, 1000);
        return function () {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        setTimeLeft(calculateMsLeft());
        setDaysLeft(calculateDaysLeft());
        setHoursLeft(calculateHoursLeft());
        setMinutesLeft(calculateMinutesLeft());
        setSecondsLeft(calculateSecondsLeft());
    }, [secondsPassed]);

    return [daysLeft, hoursLeft, minutesLeft, secondsLeft, timeLeft];
}

export default useCountdown;