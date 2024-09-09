
//heir maak ik een customehook of een function. deze hook gaat net als een state gedragen maar een state dat in de localstorage gaat op te slaan.
//niet vergeten in het eerste elke customehook moet je use zetten.
import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T ) {
    const [value , setValue] = useState<T>(()=>{
        let localCart = localStorage.getItem("cartItems")

        if(localCart != null){
            return JSON.parse(localCart)
        }else{
            return initialValue;
        }
    })

    useEffect(()=>{
localStorage.setItem(key , JSON.stringify(value))
    },[key ,value])
    return[value , setValue]as [typeof value , typeof setValue]
}