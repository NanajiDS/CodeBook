import { useEffect } from 'react'

const useTitle = (title) => {
  useEffect(()=>{
    document.title = `${title}-code Book`;
  },[title]);
  return null
}

export default useTitle
