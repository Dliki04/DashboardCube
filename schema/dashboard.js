cube(`Dash`, {
    sql: `select * from Dash`,
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
        type: `sum`,
        sql: `Profit`
      },
      profitRatio: {
        type:`sum`,
        
      }
    },
    dimensions: {
      states: {
        type: `string`,
        sql: `State`
      }
    //   lang: {
    //     type: `string`,
    //     sql: `lang`
    //   }
    // }
  }
});