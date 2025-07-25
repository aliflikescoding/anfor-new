"use client";
import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);
  const [section, setSection] = useState("");

  // later you can add other states like:
  // const [isVisible, setIsVisible] = useState(true);
  // const [isTransparent, setIsTransparent] = useState(true);

  return (
    <HeaderContext.Provider value={{ isSticky, setIsSticky, isShowButton, setIsShowButton, section, setSection }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
