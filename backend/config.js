module.exports = {
    port: process.env.PORT || 3001,
    db : process.env.MONGODB||`mongodb://localhost:27017/contacts`
    //db : process.env.MONGODB||`mongodb+srv://user1:welcome1@breakabletoycontacts-fsa5m.mongodb.net/test?retryWrites=true`
    
}