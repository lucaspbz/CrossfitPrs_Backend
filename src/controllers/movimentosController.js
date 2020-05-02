const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const movimentos = await connection('movimentos').select('*');

        return response.json(movimentos);
    },

    async create(request, response) {

        const { name } = request.body;

        const id = await connection('movimentos').insert({
            name
        })
        console.log(id);
        return response.json({ id });
    }

}