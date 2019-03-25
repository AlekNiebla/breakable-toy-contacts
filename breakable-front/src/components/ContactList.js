import React, { Component } from 'react';
import ContactElement from './ContactElement';
import ContactInfo from './ContactInfo';

const data = {
    name: "Jesus",
    lastname: "Niebla",
    company: "Nearsoft",
    phone: 6621558888,
    email: "aniebla@nearsoft.com",

}

const api_url = `http://localhost:3001/api/contact/5c97de042ce54f63ee5090cd`;


class ContactList extends Component {

    constructor() {
        super();
        this.state = {
            data: data,
        };
    }

    getData = contact_data => {
        const {_id} = contact_data._id;
        const {name} = contact_data.name;
        const {lastname} = contact_data.lastname;
        const {company} = contact_data.company;
        const {phone} = contact_data.phone;
        const {email} = contact_data.email;

        const data={
            _id,
            name,
            lastname,
            company,
            phone,
            email,
        }

        return data;
    }

    showContactInformation = () => {
        fetch(api_url).then(resolve => {
            return resolve.json();
        }).then( data => {

            const seeContact = this.getData(data);
            console.log(seeContact);
            debugger;
            this.setState({
                data: seeContact
            })
        });

    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <div>
                    <button onClick={this.showContactInformation}> <ContactElement data={data}></ContactElement> </button>
                    <button onClick={this.showContactInformation}> <ContactElement data={data}></ContactElement> </button>
                    <button onClick={this.showContactInformation}> <ContactElement data={data}></ContactElement> </button>
                    <button onClick={this.showContactInformation}> <ContactElement data={data}></ContactElement> </button>
                    <button onClick={this.showContactInformation}> <ContactElement data={data}></ContactElement> </button>
                </div>
                <div>
                    <ContactInfo data={data}></ContactInfo>
                </div>

            </div>
        )
    }

};

export default ContactList