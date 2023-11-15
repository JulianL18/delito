const {Schema, model} = require('mongoose');

const DelitosSchema = ({
    tipoHurto:{
        type:String,
        required:[true, 'El delito es requerido']
    },
    direccion:{
        type:String,
        required:[true, 'El dirección es requerido']
    },
    fecha:{
        type:String,
        required:[true, 'La fecha es requerida']
    },
    ciudad:{
        type:String,
        required:[true, 'La ciudad es requerida']
    },
    descripcion:{
        type:String,
        required:[true, 'La descripción es requerida'],
        min:[4, 'La descripción debe contener como minimo 150 caracteres'],
        max:[50, 'La descripción debe contener como máximo 500 caracteres'],
    }
});

module.exports = model('Delitos', DelitosSchema);