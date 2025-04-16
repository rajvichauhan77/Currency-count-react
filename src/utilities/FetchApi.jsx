import React, {useEffect, useState} from "react";

const fetchApi  = (from, to) => {

    const [data, setData] = useState({})

    useEffect(() => {
        if(from)
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res[from])
                setData(res[from])
            })
    }, [from , to])


    return data
}
      
export default fetchApi 
