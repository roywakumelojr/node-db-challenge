
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments()

        tbl.string('project_name').notNullable()
        tbl.string('description')
        tbl.boolean('completed').notNullable().defaultTo(false)
    })

    .createTable('resource', tbl => {
        tbl.increments()

        tbl.string('resource_name').notNullable()
        tbl.string('description')
    })

    .createTable('task', tbl => {
        tbl.increments()

        tbl.string('description').notNullable()
        tbl.string('notes').notNullable()
        tbl.boolean('completed').notNullable().defaultTo(false)

        tbl.integer('project_id')
        .unsigned()
        .inTable('project')
        .references('id')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

    .createTable('project_resource', tbl => {
        tbl.increments()

        tbl.integer('project_id')
        .unsigned()
        .inTable('project')
        .references('id')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl.integer('resource_id')
        .unsigned()
        .inTable('resource')
        .references('id')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
};
