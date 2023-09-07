// eslint-disable-next-line no-unused-vars
import React, { createContext, useMemo, useState, useEffect } from "react";

export const ContextGlobal = createContext({});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    theme: "light",
    data: []
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
     console.log(data); 

      setState((prevState) => ({
        ...prevState,
        data,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  const value = useMemo(() => ({ state, toggleTheme }), [state]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
