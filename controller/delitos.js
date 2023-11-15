const { response } = require('express')

const delito = require('../models/delitos')

const getDelito = async (req, res) => {
    const delitos = await delito.find();//Obtener todos los documentos de una coleccion
    res.json({
        msg: delitos
    })
};

const postDelito = async (req, res) => {
    const datos = req.query //capturar datos de la postman

    let mensaje = 'Inserción exitosa'
    try {

        const usuarios = new delito(datos)
        usuarios.save()

    } catch (error) {

        mensaje = error
        console.log(error)

    }

    //guarda en la base de datos
    res.json({
        msg: mensaje
    })
}
    const putDelito = async(req, res) => {
        const { tipoHurto, direccion, fecha, ciudad, descripcion} = req.query // Desestructurar
        let mensaje = 'Actualización exitosa'
        try {
            
            const delito = await delito.findOneAndUpdate({tipoHurto: tipoHurto,}, {direccion: direccion, fecha: fecha, ciudad: ciudad, descripcion: descripcion})

        } catch (error) {
            mensaje = error;
        }

        res.json({
            msg:mensaje
        })
    }

const deleteDelito = async (req, res) => {
    const {tipoHurto} = req.query
    let mensaje = 'Actualización exitosa'
    try {
        const delito = await delito.findOneAndDelete({tipoHurto: tipoHurto})
    } catch (error) {
        mensaje = error;
    }
}

module.exports = {
    getDelito,
    postDelito,
    putDelito,
    deleteDelito
}