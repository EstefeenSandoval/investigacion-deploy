const express = require("express");
const router = express.Router();


router.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
});


const properties = [
    {
        id: 1,
        title: 'Departamento en el centro',
        location: 'Ciudad de México',
        price_per_night: 75
    },
    {
        id: 2,
        title: 'Casa en la playa',
        location: 'Cancún',
        price_per_night: 150
    }
];


router.get('/properties', (req, res) => {
    res.json(properties);
});

router.post('/properties', (req, res) => {
    const newProperty = req.body;
    newProperty.id = properties.length + 1; 
    properties.push(newProperty);
    res.status(201).json({
        message: 'Propiedad agregada con éxito',
        property: newProperty
    });
});

module.exports = router;