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
     }
   
  }, 
  dimensions: { 
    shipdate:{
      sql:`ShipDate`,
      type:`string`
    },
   
  },
});