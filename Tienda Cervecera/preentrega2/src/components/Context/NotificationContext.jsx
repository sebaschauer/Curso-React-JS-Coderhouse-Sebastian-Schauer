import { createContext, useState ,useContext} from "react";


const Notification = ({message, severity}) =>{
    const background = {
        success:'green', 
        warning:'yellow',
        danger:'red',
        default:'blue'
    };

    const notificationStyles = {
        position:"center", 
        top:100,
        right:30,
        backgroundColor: background[severity] || background.default, 
        color:'white'
    };


    if (message === "") return
    return<div style={notificationStyles}>{message}</div>;
};


export const NotificationContext = createContext()

export const NotificationProvider = ({children})=>{

    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (sev, msg)=>{
        setMessage(msg)
        setSeverity(sev)
        setTimeout(()=>{
            setMessage('')
        },3000 )
    }
    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = ()=>{
    return useContext(NotificationContext)
} 



