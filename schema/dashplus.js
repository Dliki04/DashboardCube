cube(`dashplus`, {
    sql: `select * from dashplus`,
    measures: {
    year:{
      sql:`ShipDate`,
      type:`count`,
      filters: [{ sql: `${CUBE}.ShipDate ='03/22/2016'`}]
    }}
  });