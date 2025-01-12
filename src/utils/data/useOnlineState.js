import { useEffect, useState } from "react"

const useOnlineState = () => {
    
    const [OnlineStatus, setOnlinestatus] = useState(true);
    useEffect(() => {
        window.addEventListener('online', () => {
          setOnlinestatus(true)  
        })
        window.addEventListener('offline', () => {
            setOnlinestatus(false)
        })
    }, [])
    return OnlineStatus;

}
export default useOnlineState;