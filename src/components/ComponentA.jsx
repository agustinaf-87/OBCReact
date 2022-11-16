import React from 'react';
import PropTypes from 'prop-types';
import ComponentB from "../components/ComponentB"
import { Contact } from '../models/Contact.class';


const ComponentA = ({contact}) => {
    return (
        <div>
            <h1>
                Name: {contact.name} <br></br>
                Last Name: {contact.lastName}
            </h1>
            <h2>
                Email: {contact.email}
            </h2>
            <ComponentB state={true}></ComponentB>
        </div>
    );
};


ComponentA.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ComponentA;
