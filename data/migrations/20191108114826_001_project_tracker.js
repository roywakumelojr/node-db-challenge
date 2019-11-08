
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments()

        tbl.string('project_name').notNullable()
        tbl.string('description')
        tbl.boolean('completed')
        .notNullable()
        .defaultTo(false)
    })

    .createTable('task', tbl => {
        tbl.increments()

        tbl.string('description').notNullable()
        tbl.string('notes')
        tbl.boolean('completed').defaultTo(false).notNullable()

        tbl.integer('project_id').references('id').inTable('project').unsigned().notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

    .createTable('project_resource', tbl => {
        tbl.increments()

        tbl.integer('project_id').references('id').inTable('project').unsigned().notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl.integer('resource_id').references('id').inTable('resource').unsigned().notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

    .createTable('resource', tbl => {
        tbl.increments()

        tbl.string('resource_name')
        .notNullable()
        tbl.string('description')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
};
