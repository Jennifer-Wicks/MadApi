const nwr_price_list = [
  {
    supplier_name: 'Namibia Wildlife Resort',
    area: 'Fish River Canyon',
    national_park: 'Richtersveld Transfortier Park',
    camp_name: 'Ai-Ais',
    low_season_start: '2020-11-01',
    low_season_end: '2021-6-30',
    high_season_start: '2021-7-01',
    high_season_end: '2021-10-31',
    accommodation_type: 'Camping',
    sharing_price_ls: 315,
    single_price_ls: 315,
    sharing_price_hs: 315,
    single_price_hs: 315,
    warning_messages: 'This will be a warning message i.e - Camp under repair after flooding',
    date: '2021-9-22'
  },
  {
    supplier_name: 'Namibia Wildlife Resort',
    area: 'Fish River Canyon',
    national_park: 'Richtersveld Transfortier Park',
    camp_name: 'Ai-Ais',
    low_season_start: '2021-11-01',
    low_season_end: '2022-6-30',
    high_season_start: '2022-7-01',
    high_season_end: '2022-10-31',
    accommodation_type: 'Camping',
    sharing_price_ls: 315,
    single_price_ls: 315,
    sharing_price_hs: 315,
    single_price_hs: 315,
    warning_messages: 'This will be a warning message i.e - Camp under repair after flooding',
    date: '2021-9-22'
  },
  {
    supplier_name: 'Namibia Wildlife Resort',
    area: 'Fish River Canyon',
    national_park: 'Richtersveld Transfortier Park',
    camp_name: 'Ai-Ais',
    low_season_start: '2020-11-01',
    low_season_end: '2021-6-30',
    high_season_start: '2021-7-01',
    high_season_end: '2021-10-31',
    accommodation_type: 'River view Double room',
    sharing_price_ls: 1350,
    single_price_ls: 1575,
    sharing_price_hs: 1650,
    single_price_hs: 1875,
    warning_messages: 'This will be a warning message i.e - Camp under repair after flooding',
    date: '2021-9-22'
  },
  {
    supplier_name: 'Namibia Wildlife Resort',
    area: 'Fish River Canyon',
    national_park: 'Richtersveld Transfortier Park',
    camp_name: 'Ai-Ais',
    low_season_start: '2021-11-01',
    low_season_end: '2022-6-30',
    high_season_start: '2022-7-01',
    high_season_end: '2022-10-31',
    accommodation_type: 'River view Double room',
    sharing_price_ls: 1350,
    single_price_ls: 1575,
    sharing_price_hs: 1650,
    single_price_hs: 1875,
    warning_messages: 'This will be a warning message i.e - Camp under repair after flooding',
    date: '2021-9-22'
  }
];

exports.seed = function (knex) {
  return knex('nwr_price_list').del()
    .then(() => {
      return knex('nwr_price_list').insert(nwr_price_list)
    })
};

