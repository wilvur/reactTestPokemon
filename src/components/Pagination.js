import React from 'react'

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPage} = props;
    return (
        <div className="pagination_container">
            <button onClick={onLeftClick}>prev</button>   
            <div> {page} de {totalPage} </div>
            <button onClick={onRightClick}>netx</button>   
        </div>
    )
}

export default Pagination
