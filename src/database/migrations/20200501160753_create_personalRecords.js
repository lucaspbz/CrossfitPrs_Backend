
exports.up = function (knex) {
    return knex.schema.createTable('personalRecords', function (table) {
        table.increments();

        table.decimal('value').notNullable();

        table.integer('movimento_id').notNullable();
        table.timestamps();

        table.foreign('movimento_id').references('id').inTable('movimentos');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('personalRecords');
};
