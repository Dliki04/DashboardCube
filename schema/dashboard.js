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
    
  
    FurnitureOnly:{
      sql: `Sales`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.Category = 'Furniture'` }],
    },
    OfficeSuppliesOnly:{
      sql: `Sales`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.Category = 'Office Supplies'` }],
    },
    TechnologyOnly:{
      sql: `Sales`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.Category = 'Technology'` }],
    },
    FurnitureProfit:{
      sql: `Profit`,
      type: `runningTotal`,
      filters: [{ sql: `${CUBE}.Category = 'Furniture'` }],
    },
    OfficeSuppliesProfit:{
      sql: `Profit`,
      type: `runningTotal`,
      filters: [{ sql: `${CUBE}.Category = 'Office Supplies'` }],
    },
    TechnologyProfit:{
      sql: `Profit`,
      type: `runningTotal`,
      filters: [{ sql: `${CUBE}.Category = 'Technology'` }],
    },
    Furniture:{
      sql: `${FurnitureProfit} / ${FurnitureOnly}*100`,
      type:`number`,
      format:`percent`
    },
    OfficeSupplies:{
      sql: `${OfficeSuppliesProfit} / ${OfficeSuppliesOnly}*100`,
      type:`number`,
      format:`percent`
    },
    Technology:{
      sql: `${TechnologyProfit} / ${TechnologyOnly}*100`,
      type:`number`,
      format:`percent`
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
    SubCategory:{
      type:`string`,
      sql:`Product Name`,
    }
    
    
}
});
