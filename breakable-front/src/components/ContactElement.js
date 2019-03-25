import React from 'react';
import PropTypes from 'prop-types';

//single element of a list of contacts
const ContactElement = ({ data: {id, name, lastname } }) => {

    return (<div><span>{name}{lastname}</span></div>);

}

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};

export default ContactElement;