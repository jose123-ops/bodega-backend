const { db } = require('../firebase.js');
const admin = require('firebase-admin');

exports.signup = async (req, res) => {
 console.log("Datos recibidos:", req.body);
    try {
        const { id, name, email, password, Rol } = req.body; // Extraer los datos

        if (!id || !name || !email || !password || !Rol) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        await db.collection('users').doc(id).set({
            name,
            email,
            password, // ⚠️ Esto debería estar hasheado por seguridad
            Rol
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
