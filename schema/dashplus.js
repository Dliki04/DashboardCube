cube(`dashplus`, {
  sql: `SELECT * FROM dashplus`,
  measures: { 
    count: { 
      sql:`Profit`,
      type: `sum`, 
    },
     sales:{
      sql:`Sales`,
      type:`sum`
     },
     Central:{
      sql:`Sales`,
      type:`sum`,
      filters: [{ sql: `${CUBE}.Region = 'Central'`}]
    },
    East:{
      sql:`Sales`,
      type:`sum`,
      filters: [{ sql: `${CUBE}.Region = 'East'`}]
    },
    West:{
      sql:`Sales`,
      type:`sum`,
      filters: [{ sql: `${CUBE}.Region = 'West'`}]
    },
    South:{
      sql:`Sales`,
      type:`sum`,
      filters: [{ sql: `${CUBE}.Region = 'South'`}]
    },
  }, 
  dimensions: { 
    shipdate:{
      sql:`ShipDate`,
      type:`string`
    },
   
  },
});