import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// function to navigate to the login page
export const LogOut = () => {

    const navigate = useNavigate();

    useEffect(() => {
                navigate("/");
           
      }, []); // El [] indica que se ejecutará una sola vez al montar el componente

    return null;

};

export default LogOut;