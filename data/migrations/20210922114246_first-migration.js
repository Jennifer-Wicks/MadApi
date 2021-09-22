
exports.up = (knex) => {
  return knex.schema
    .createTable('nwr_price_list', function (table) {
      table.increments('price_id');
      table.string('supplier_name', 255);
      table.string('area', 255);
      table.string('national_park', 600);
      table.string('camp_name', 255);
      table.date('low_season_start');
      table.date('low_season_end');
      table.date('high_season_start');
      table.date('high_season_end');
      table.string('accommodation_type', 255);
      table.bigInteger('sharing_price_ls');
      table.bigInteger('single_price_ls');
      table.bigInteger('sharing_price_hs');
      table.bigInteger('single_price_hs');
      table.string('warning_messages', 2000);
      table.string('date');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};
