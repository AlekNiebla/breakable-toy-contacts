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

const data2 = {
    name: "Valeria",
    lastname: "Garcia",
    company: "Nearsoft",
    phone: 6621334455,
    email: "vgarcia@nearsoft.com",
}

const api_url = `http://localhost:3001/api/contact`;


class ContactList extends Component {

    constructor() {
        super();
        this.state = {
            data: data,
        };
    }

    showContactInformation = () => {
        fetch(api_url).then(resolve => {
            console.log(resolve);
            debugger;
        });

        console.log("Informacion de Usuario");
        this.setState({
            data: data2,
        });

        console.log(data2.lastname);
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <div>
                    <h3> Contacts List</h3>
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