cube(`dashplus`, {
  sql: `SELECT * FROM dashplus`,
  measures: { 
    count: { 
      sql:`Profit`,
      type: `sum`, 
    },
    salesofcount:{
      sql:`Sales`,
      type:`sum`
    },
     sales:{
      sql:`Sales`,
      type:`number`
     },
     shipdata :{
      sql:`ShipDate`,
      type:`number`
     },
     Central:{
      sql:`Region`,
      type:`number`
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
    region:{
      sql:`RowID`,
      type:`string`,
    },
   
  },
});