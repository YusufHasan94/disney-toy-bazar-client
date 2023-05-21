import { useEffect } from "react"

const dynamicTitle = title =>{
    useEffect(()=>{
        document.title = `Disney Toy Bazar | ${title}`
    }, [title])
};

export default dynamicTitle;