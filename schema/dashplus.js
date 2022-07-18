cube(`dashplus`, {
    sql: `select * from dashplus`,
    measures: {
    year:{
      sql:`ShipDate`,
      type:`count`,
      // filters: [{ sql: `${CUBE}.ShipDate between '01/01/2016' and '12/31/2016'`}]
    }}
  });