import { useContext,createContext,useState,useEffect} from "react";
const ThemeContext = createContext();
export const useTheme =()=> useContext(ThemeContext)

const ThemeProvider = ({children})=>{

   
    const [isDarkTheme,setIsDarkTheme] = useState(false)


    const toggleTheme =()=>{
        let stateData=!isDarkTheme
        setIsDarkTheme(stateData)
       

        localStorage.setItem("dark",stateData)
    }

    useEffect(()=>{
        let themeData= localStorage.getItem('dark')
        if(themeData === "false"){
            themeData=false
        }else{
            themeData=true
        }
    setIsDarkTheme(themeData)
    },[])



   

    return(

        <ThemeContext.Provider value = {{isDarkTheme,toggleTheme}}>

            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
