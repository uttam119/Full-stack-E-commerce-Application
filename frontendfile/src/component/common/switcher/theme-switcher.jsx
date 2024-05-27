// import { Form } from "react-hook-form"
// import {useTheme} from "../../../themeContext";

// const ThemeSwitch=()=>{
// // const{isDarkTheme,toggleTheme}=useTheme()
// // console.log("ThemeSwitch loaded");
// // return(
// //     <>
// //     <Form.Check
    
// //      type="switch"
// //      checked={isDarkTheme}
// //     onChange={toggleTheme}
// //      id="custom-switch"
// //      label="Dark Theme"
    
    
    
// //           />
   
// //     </>
// // )
// }

// export default ThemeSwitch;

import  {Form} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../reducers/theme.reducer";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <Form.Check
        type="switch" 
        checked={isDarkTheme}
        onChange={handleThemeToggle}
        id="custom-switch"
        label="Dark Theme" 
        />

        
    </>
  );
};

export default ThemeSwitch;
