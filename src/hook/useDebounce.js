import { useState, useEffect } from "react";
function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value)

    useEffect(()=>{
        const handleSetDebounce = setTimeout(()=>{
            setDebounce(value)
        },delay)

        return ()=> clearTimeout(handleSetDebounce)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])

    return debounce
}

export default useDebounce;