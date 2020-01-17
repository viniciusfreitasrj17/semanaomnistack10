const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // Buscar todos os dev num raio de 10km
        // Filtrar por tecnologias

        const { latitude, longitude, techs } = request.query;

        const techArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [ longitude, latitude ],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ res: devs });
    }
}