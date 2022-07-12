cube(`Dash`, {
<<<<<<< HEAD
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
    }
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
    }
}
}
);

=======
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
      }
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
      }
  }
}
);


>>>>>>> cd5a0eda5f9496a1be3042cd5605e3bd3a4f2abb
