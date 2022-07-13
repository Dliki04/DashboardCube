cube(`Dash`, {
  sql: `select * from Dash`,
  refreshKey:{
     every:'1 minute',
  },
  measures: {
  //   count: {
  //     type: `count`
  //   },
    rowCount: {
      type: `count`,
    },
    quantityCount: {
      type: `sum`,
      sql: `Sales`
    },
    profit: {
      type: `runningTotal`,
      sql: `Profit`,
      format:`currency`
    },
    profitratio:{
      sql: `${profit} / ${quantityCount}*100.0`,
      type:`number`,
      format:`percent`
    },
    totalSegment:{
      sql: `Segment`,
      type: `count`,
    },
    ConsumerOnly:{
      sql: `Segment`,
      type: `count`,
      filters: [{ sql: `${CUBE}.Segment = 'Consumer'` }],
    },
    ConsumerProfit:{
      sql: `Profit`,
      type: `runningTotal`,
      filters: [{ sql: `${CUBE}.Segment = 'Consumer'` }],
    },
    Consumer:{
      sql: `${ConsumerProfit} / ${totalSegment}`,
      type:`number`,
      format:`percent`
    },
    
  
  },
  dimensions: {
    states: {
      type: `string`,
      sql: `State`,
    },
    SalesbyCategory:{
      type:`string`,
      sql:`Category`
    },
    Region:{
      type:`string`,
      sql:`Region`,
      shown:false
    },
    Users: {
      type: `string`,
      sql: `Segment`,
    },
    // Regions:{
    //   type:`string`,
    //   sql:[{ sql:`${CUBE}.Region='W'`}]`
    // }
    
}
});