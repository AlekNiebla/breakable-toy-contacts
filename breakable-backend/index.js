

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');


mongoose.connect(config.db,(err, res)=>{
    if (err){
        console.log(`error al conectar a la base de datos ${err}`);
    }
    console.log('conexion establecida...');
    app.listen(config.port, ()=> {
        console.log(` API REST corriendo en http://localhost:${config.port}`);
    })
})

