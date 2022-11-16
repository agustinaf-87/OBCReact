import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const ComponentB = (state) => {
    const [connection, setConnection ] = useState(state); 
    
    return (
        <div>
            <h3>
                {connection=== false ? "Contact Online":"Contact Offline"}
                <button onClick={()=> setConnection (!connection)}>{connection ===false ? "Online":"Offline"}</button>
            </h3>
        </div>
    );
};


ComponentB.propTypes = {
    state: PropTypes.bool
};


export default ComponentB;
