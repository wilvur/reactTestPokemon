import React from 'react'

export default function Pagination({gotoNextP,gotoPrevP}) {
    return (
        <div>
            {gotoPrevP && <button onClick={gotoPrevP}>Prev</button>}
            {gotoNextP && <button onClick={gotoNextP}>Next</button>}
        </div>
    )
}
