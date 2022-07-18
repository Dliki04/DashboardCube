cubejsApi.load({
    measures: ["dashplus.sales"],
    dimensions: ["dashplus.region"],
    order: {'dashplus.region': 'asc'},

}).then(resultSet => {
    cubejsApi.load({
        measures: ["dashplus.shipdata"],
        dimensions: ["dashplus.region"],
        order: {'dashplus.region': 'asc'},

    }).then(data => {
        //console.log("central" + resultSet['loadResponse']['data'].length);
        //console.log("data" + data['loadResponse']['data'].length)

        cubejsApi.load({
        measures: ["dashplus.Central"],
        dimensions: ["dashplus.region"],
        order: {'dashplus.region': 'asc'},
        }).then(regiondata => {
            let ans = 0;
            for (let i = 0; i < data['loadResponse']['data'].length; i++) {
                let year = data['loadResponse']['data'][i]['dashplus.shipdata'].split("/");
                //console.log("required year = "+yearofrequired + " yaear = " + year[2]);
                if (year[2] === yearofrequired) {
                    //console.log("year is = "+data['loadResponse']['data'][i]['dashplus.shipdata'])
                    //console.log(resultSet['loadResponse']['data'][i]['dashplus.sales']);
                    //console.log(data['loadResponse']['data'][i]['dashplus.shipdata']);
                    //if (regionofyear === 'Central') {
                        //ans += resultSet['loadResponse']['data'][i]['dashplus.sales'];
                    //}
                    console.log(regiondata['loadResponse']['data'][i]['dashplus.Central']);
                }
            }
        })
        
    })

});