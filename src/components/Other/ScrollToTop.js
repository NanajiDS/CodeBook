import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {

  const{pathName} = useLocation();

     useEffect(() => {
    const scrollableElement = document.documentElement || document.body;
    scrollableElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

  }, [pathName]);
  return null;
}


