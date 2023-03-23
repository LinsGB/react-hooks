import axios from "axios"
import { useCallback, useState } from "react"
import { MemoComponent } from "./memoComponent"
import './index.css';

export function WithCallback () {
    console.time('Render WithCallback')

    const [dogImage, setDogImage] = useState()

    const getDog = useCallback(async () => {
        setDogImage((await axios.get('https://dog.ceo/api/breeds/image/random')).data.message)
    },[]) 

    console.timeEnd('Render WithCallback')

    return(
        <div>
            <img src={dogImage}/>
            <MemoComponent  onClick={getDog} buttonText='WithCallback'/>
        </div>
    )

}

export function WithoutCallback () {
    console.time('Render WithoutCallback')

    const [dogImage, setDogImage] = useState('')


    const getDog = async () => {
        setDogImage((await axios.get('https://dog.ceo/api/breeds/image/random')).data.message)
    }

    console.timeEnd('Render WithoutCallback')

    return(
        <div>
            <img src={dogImage}/>
            <MemoComponent  onClick={getDog} buttonText='WithoutCallback'/>
        </div>
    )    
}
