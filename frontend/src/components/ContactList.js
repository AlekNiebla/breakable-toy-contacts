import React, { Component } from 'react';
import ContactElement from './ContactElement';
import ContactInfo from './ContactInfo';

const data = {
    _id: "5c97de362ce54f63ee5090cf",
    name: "defaultName",
    lastname: "Niebla",
    company: "Nearsoft",
    phone: 6621558888,
    email: "aniebla@nearsoft.com",

}


class ContactList extends Component {

    

    render() {
        return (
            <div>
                <div>
                    <ContactElement _id = {data._id} name={data.name} lastname={data.lastname}></ContactElement> 
                    <ContactElement _id = {data._id} name={data.name} lastname={data.lastname}></ContactElement> 
                    <ContactElement _id = {data._id} name={data.name} lastname={data.lastname}></ContactElement> 
                    
                </div>

            </div>
        )
    }

};

export default ContactList