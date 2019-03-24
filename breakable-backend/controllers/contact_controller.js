const Contact = require('../models/contact')

async function getAllContacts(ctx){
    const contact = await Contact.find({})
    ctx.body = contact
}

async function getContact(ctx){
    const id = ctx.params.contactId
    console.log(ctx.params.contactId)
    const contact = await Contact.findById(id)
    ctx.body = contact
    
}

async function postContact(ctx){
    const new_contact = ctx.request.body;
    let contact = new Contact(new_contact);
    console.log(contact);
    const saved_contact = await contact.save();
    ctx.body = saved_contact;
}

async function updateContact(ctx){
    const id = ctx.params.contactId
    const contact = await Contact.findByIdAndUpdate(id, ctx.request.body)

    ctx.body = contact
}

async function deleteContact(ctx){
    const id = ctx.params.contactId
    const contact = await Contact.findById(id)


    const delete_contact = await contact.remove()

    ctx.body = delete_contact;

}

module.exports ={
    getAllContacts,
    getContact,
    postContact,
    updateContact,
    deleteContact
}