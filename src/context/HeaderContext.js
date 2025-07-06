"use client";
import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  // later you can add other states like:
  // const [isVisible, setIsVisible] = useState(true);
  // const [isTransparent, setIsTransparent] = useState(true);

  return (
    <HeaderContext.Provider value={{ isSticky, setIsSticky }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
