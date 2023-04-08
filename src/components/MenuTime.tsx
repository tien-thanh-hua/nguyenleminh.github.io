import { useEffect, useState } from "react";
import MenuItemRight from "./MenuItemRight";

function formatDate(date : Date) {
  return new Intl.DateTimeFormat(
    'en-US',
    {
      weekday: 'short',
      day:'2-digit',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
  ).format(date)
}

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(
    () => {
      const intervalId = setInterval(() => {
      
        setTime(new Date());
      }, 1000);
      return () => {
        clearInterval(intervalId)
      }
    } 
  )

  return(
    <MenuItemRight content={formatDate(new Date())} />
  )

}

export default Time;