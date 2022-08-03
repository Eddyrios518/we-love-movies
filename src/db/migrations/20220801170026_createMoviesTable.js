exports.up = function(knex) { // creates table
    return knex.schema.createTable("movies", (table) => {
        table.increments("movie_id").primary();
        table.string("title");
        table.integer("runtime_in_minutes");
        table.string("rating");
        table.text("description");
        table.string("image_url");
        table.timestamps(true, true);


    })
  
};

exports.down = function(knex) {  // deletes table 
    return knex.schema.dropTable("movies");
};