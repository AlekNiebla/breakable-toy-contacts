import React, { Component } from 'react';
import getContactById from '../services/getContactById';




//single element of a list of contacts
class ContactElement extends Component {

    constructor(props) {
        super(props);
        const {_id} = props;
        const {name}= props;
        const {lastname}= props;
        this.state = {
            name,
            lastname,
            _id,
        };

        debugger;
    }

    getData = contact_data => {
        const { _id, name, lastname, company, phone, email } = contact_data;

        const data = {
            _id,
            name,
            lastname,
            company,
            phone,
            email,
        }

        debugger;
        return data;
    }

    showContactInformation = () => {
        const api_url = getContactById(this._id)
        fetch(api_url).then(resolve => {
            return resolve.json();
        }).then(data => {

            const seeContact = this.getData(data);
            console.log(seeContact);
            this.setState({
                data: seeContact,
            })

            debugger;
        });

    }

    render() {
        return (
            <div> <button onClick={this.showContactInformation}> {this.data.name}   {this.data.lastname}</button></div>
        );

    };
}

//ContactElement.propTypes = {
//    name: PropTypes.string.isRequired,
//    lastname: PropTypes.string.isRequired,
//};

export default ContactElement;