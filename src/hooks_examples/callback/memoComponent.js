import { memo, useEffect } from "react";


const MemoComponent = memo( function MemoComponent ({onClick, buttonText}) {
    console.log('Render MemoComponent')
    useEffect(() => {
        setTimeout(() => {}, 1000)
    }, [])

    return (<button onClick={onClick}>{buttonText}</button>)
})

export {MemoComponent}