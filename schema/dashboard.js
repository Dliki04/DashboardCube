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
    sales:{
      type:`sum`,
      sql:`Sales`
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
      sql: `Sales`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.Segment = 'Consumer'` }],
    },
    ConsumerProfit:{
      sql: `Profit`,
      type: `runningTotal`,
      filters: [{ sql: `${CUBE}.Segment = 'Consumer'` }],
    },
    Consumer:{
      sql: `${ConsumerProfit} / ${ConsumerOnly}*100`,
      type:`number`,
      format:`percent`
    },
    CorporateOnly:{
      sql: `Sales`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.Segment = 'Corporate'` }],
    },
    CorporateProfit:{
      sql: `Profit`,
      type: `runningTotal`,
      filters: [{ sql: `${CUBE}.Segment = 'Corporate'` }],
    },
    Corporate:{
      sql: `${CorporateProfit} / ${CorporateOnly}*100`,
      type:`number`,
      format:`percent`
    },
    HomeOfficeOnly:{
      sql: `Sales`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.Segment = 'Home Office'` }],
    },
    HomeOfficeProfit:{
      sql: `Profit`,
      type: `runningTotal`,
      filters: [{ sql: `${CUBE}.Segment = 'Home Office'` }],
    },
    HomeOffice:{
      sql: `${HomeOfficeProfit} / ${HomeOfficeOnly}*100`,
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
    Cities:{
      type:`string`,
      sql:`City`,
      shown:false
    },
    // Regions:{
    //   type:`string`,
    //   sql:[{ sql:`${CUBE}.Region='W'`}]`
    // }
    
}
});