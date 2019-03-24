import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({ data: { name, lastname, company, phone, email }}) => (
    <div>
        <span>{name} {lastname} </span> <br />
        <span>{`company: ${company}`}</span> <br />
        <span>{`phone: ${phone}`} </span> <br />
        <span> {`email: ${email}`} </span><br />
    </div>
);

ContactInfo.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    company: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string.isRequired,
};

export default ContactInfo;