import React from 'react';
import {ClickedContext} from '../App';

export default props => {
    return (
        <div style={{
            width: '200px',
            margin: '0 auto',
            border: '1px solid #ccc'
        }}>
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}