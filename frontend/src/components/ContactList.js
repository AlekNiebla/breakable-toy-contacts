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


class ContactList extends Component {

    constructor() {
        super();
        this.state = {
            data: data,
        };
    }

    getData = contact_data => {
        const {_id, name, lastname, company, phone, email} = contact_data;

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

    showContactInformation = (id) => {
        const api_url = `http://localhost:3001/api/contact/${id}`;

        fetch(api_url).then(resolve => {
            return resolve.json();
        }).then( data => {

            const seeContact = this.getData(data);
            console.log(seeContact);
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
                    <button onClick={this.showContactInformation("5c95aa2ed50583140d581c4e")}> <ContactElement data={data}></ContactElement> </button>
                    <button onClick={this.showContactInformation("5c97de1b2ce54f63ee5090ce")}> <ContactElement data={data}></ContactElement> </button>
                    <button onClick={this.showContactInformation("5c97de362ce54f63ee5090cf")}> <ContactElement data={data}></ContactElement> </button>
                    <button onClick={this.showContactInformation("5c97de042ce54f63ee5090cd")}> <ContactElement data={data}></ContactElement> </button>
                    
                </div>
                <div>
                    <ContactInfo data={data}></ContactInfo>
                </div>

            </div>
        )
    }

};

export default ContactList