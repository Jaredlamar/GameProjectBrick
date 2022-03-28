import React, {useEffect, useState, useRef} from "react";

function Game() {
    let canvasHere = useRef(null)

    useEffect(() =>{
        const ctx = canvasHere.current.getContext('2d')
        ctx.fillRect(100, 100, 100, 100);
    }, [])

    return (
        <div>
            <canvas ref={canvasHere} id="clock" width={window.innerWidth} height={window.innerHeight}>
            </canvas>
        </div>
    )
}
export default Game;