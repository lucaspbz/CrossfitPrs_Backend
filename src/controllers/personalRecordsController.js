const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { value } = request.body;
        const movimento_id = request.headers.movimento_id;
        const created_at = Date.now();

        const personalRecordId = await connection('personalRecords').insert({
            value,
            movimento_id,
            created_at
        });
        return response.json(personalRecordId);
    },
    async index(request, response) {
        const movimento_id = request.headers.movimento_id;
        const personalRecords = await connection('personalRecords')
            .where('movimento_id', movimento_id).select('*');

        return response.json(personalRecords);
    },
    async delete(request, response) {
        const { id } = request.params;

        await connection('personalRecords').where('id', id).delete();
        return response.status(204).send();
    }
}