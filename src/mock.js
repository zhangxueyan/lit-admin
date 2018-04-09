var Mock = require('mockjs')
var users = Mock.mock({
    'list|20': [{
        name:()=>Mock.Random.cname(),
        sex: ()=>Mock.Random.integer(0, 1),
        "age|20-60":20,
        date:()=>Mock.Random.date(),
        address:()=>Mock.Random.county(true)
    }]
})

var books = Mock.mock({
	'list|20':[{
	     title:()=>Mock.Random.ctitle(3,5),
		 date:()=>Mock.Random.date(),
		 name:()=>Mock.Random.cname(),
		 address:()=>Mock.Random.county(true)
	}]
})

export { users,books}

